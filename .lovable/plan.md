

## Logo-Integration: Betriebskosten-SVG ueberall einsetzen

Das hochgeladene SVG-Logo (bunter Ring mit Rechnungssymbol auf dunklem Farbverlauf) wird als offizielles App-Logo an allen relevanten Stellen eingesetzt.

### Betroffene Stellen

| Stelle | Aktuell | Neu |
|---|---|---|
| **Sidebar-Header** | Lila Quadrat mit "F" | SVG-Logo (32x32px) |
| **Login-Seite** | Lila Quadrat mit "F" | SVG-Logo (48x48px) |
| **Registrierungs-Seite** | Lila Quadrat mit "F" | SVG-Logo (48x48px) |
| **Passwort-vergessen-Seite** | Lila Quadrat mit "F" | SVG-Logo (48x48px) |
| **Browser-Tab (Favicon)** | Standard-Favicon | SVG als Favicon |
| **index.html Titel + Meta** | "Lovable App" | "Fintutto Nebenkosten" |

---

### Technische Umsetzung

#### 1. Logo-Datei kopieren

Das SVG wird von `user-uploads://betriebskosten.svg` an zwei Orte kopiert:
- `src/assets/logo.svg` -- fuer den Import in React-Komponenten (optimiert durch Vite-Bundling)
- `public/favicon.svg` -- fuer das Browser-Tab-Icon (muss im public-Ordner liegen)

#### 2. Auth-Seiten aktualisieren (3 Dateien)

In `LoginPage.tsx`, `RegisterPage.tsx` und `ForgotPasswordPage.tsx` wird das bisherige Platzhalter-Element:

```text
<div class="... rounded-lg bg-primary ...">F</div>
```

ersetzt durch:

```text
<img src={logo} alt="Fintutto Logo" class="h-12 w-12 rounded-lg" />
```

Das Logo wird per ES6-Import eingebunden (`import logo from "@/assets/logo.svg"`).

#### 3. Sidebar-Header aktualisieren

In `AppSidebar.tsx` wird das "F"-Quadrat im Header durch das Logo-Bild ersetzt (32x32px mit abgerundeten Ecken). Der Text "Fintutto / Nebenkosten" bleibt daneben bestehen.

#### 4. Favicon und Meta-Tags

In `index.html`:
- Favicon-Link auf `/favicon.svg` setzen
- Titel aendern: "Lovable App" -> "Fintutto Nebenkosten"
- OG-Title und Description aktualisieren
- Bestehende Lovable-Branding-Metadaten durch App-eigene ersetzen

#### 5. Dateien-Uebersicht

| Datei | Aktion |
|---|---|
| `src/assets/logo.svg` | Neu (Kopie) |
| `public/favicon.svg` | Neu (Kopie) |
| `src/pages/auth/LoginPage.tsx` | Logo-Import + Bild statt "F"-Box |
| `src/pages/auth/RegisterPage.tsx` | Logo-Import + Bild statt "F"-Box |
| `src/pages/auth/ForgotPasswordPage.tsx` | Logo-Import + Bild statt "F"-Box |
| `src/components/layout/AppSidebar.tsx` | Logo-Import + Bild statt "F"-Box |
| `index.html` | Favicon + Titel + Meta-Tags |

