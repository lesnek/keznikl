# Ski Servis Keznikl – statický web

## Jak upravit web na GitHubu

1. Otevřete soubor `nastaveni.js`.
2. Klikněte na ikonu tužky (Edit this file).
3. Změňte ceník, kontakt nebo banner uvnitř uvozovek.
4. Klikněte na **Commit changes** a potvrďte změnu do větve `main`.
5. Cloudflare Pages zveřejní novou verzi automaticky.

Všechna běžně upravovaná data jsou v jediném souboru `nastaveni.js`.

### Ceník

Neměňte názvy polí `nazev`, `cena`, `jednotka`, `polozky` a
`nejoblibenejsi`. Novou odrážku lze přidat jako další text v uvozovkách,
oddělený čárkou. Hodnota `nejoblibenejsi: true` zvýrazní cenovou kartu.

### Kontakt

Změna e-mailu, telefonu nebo lokality se automaticky projeví na všech místech
webu.

### Informační banner

Banner zapnete změnou:

```js
zobrazit: false,
```

na:

```js
zobrazit: true,
```

Potom stačí upravit jeho text. Odkaz je volitelný a může zůstat prázdný.

## Cloudflare Pages

- Framework preset: `None`
- Build command: ponechat prázdný
- Build output directory: `/`
- Production branch: `main`

Repozitář má obsahovat přímo soubory `index.html`, `styles.css`,
`nastaveni.js`, `README.md` a složku `assets`.
