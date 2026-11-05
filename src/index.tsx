import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { html } from './page'

type Bindings = {
  DB?: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('/api/*', cors())

/* ───────── page ───────── */
app.get('/', (c) => c.html(html))

/* ───────── crew applications ───────── */
app.post('/api/apply', async (c) => {
  let body: Record<string, unknown>
  try {
    body = await c.req.json()
  } catch {
    return c.json({ ok: false, error: 'Invalid request body.' }, 400)
  }

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const role = String(body.role ?? '').trim()
  const link = String(body.link ?? '').trim()
  const message = String(body.message ?? '').trim()

  if (!name || name.length > 120) {
    return c.json({ ok: false, error: 'Please enter a valid name.' }, 400)
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200) {
    return c.json({ ok: false, error: 'Please enter a valid email address.' }, 400)
  }
  if (!role || role.length > 80) {
    return c.json({ ok: false, error: 'Please choose a role.' }, 400)
  }
  if (!message || message.length > 4000) {
    return c.json({ ok: false, error: 'Tell us a little about what you want to build.' }, 400)
  }

  // Persist to D1 when the binding is available.
  if (c.env.DB) {
    try {
      await c.env.DB.prepare(
        `CREATE TABLE IF NOT EXISTS applications (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          role TEXT NOT NULL,
          link TEXT,
          message TEXT NOT NULL,
          created_at TEXT NOT NULL DEFAULT (datetime('now'))
        )`
      ).run()

      const res = await c.env.DB.prepare(
        `INSERT INTO applications (name, email, role, link, message)
         VALUES (?, ?, ?, ?, ?)`
      )
        .bind(name, email, role, link, message)
        .run()

      return c.json({ ok: true, id: res.meta?.last_row_id ?? null })
    } catch (err) {
      console.error('D1 insert failed:', err)
      return c.json({ ok: false, error: 'Storage unavailable — please email hello@cosmiccrew.dev.' }, 500)
    }
  }

  // No database bound: accept the transmission gracefully rather than failing the user.
  console.log('Application received (no DB binding):', { name, email, role, link })
  return c.json({ ok: true, id: null })
})

/* ───────── stats (used by the site) ───────── */
app.get('/api/stats', async (c) => {
  let applications = 0
  if (c.env.DB) {
    try {
      const row = await c.env.DB.prepare(
        `SELECT COUNT(*) AS n FROM applications`
      ).first<{ n: number }>()
      applications = row?.n ?? 0
    } catch {
      applications = 0
    }
  }
  return c.json({ applications })
})

app.get('/api/health', (c) => c.json({ ok: true, service: 'cosmic-crew-development' }))

app.notFound((c) => c.json({ ok: false, error: 'Not found' }, 404))

export default app
