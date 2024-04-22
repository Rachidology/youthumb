import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />

          {/* Google AdSense code */}
          <script
            data-ad-client="DEINE_ADSENSE_CLIENT_ID"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>

          {/* SEO optimierte Meta-Tags */}
          <title>YouTube Thumbnail Downloader - Speichern Sie YouTube-Video-Thumbnails</title>
          <meta
            name="description"
            content="Erhalten Sie kostenlose Thumbnail-Bilder von YouTube-Videos in Full HD, HD, SD und kleinen Größen. Verwenden Sie unseren YouTube Thumbnail Downloader für Präsentationen, Animationen oder verschiedene kreative Projekte."
          />
          {/* Andere Meta-Tags wie Schlüsselwörter, Autor usw. können hier hinzugefügt werden */}
          <style>
            {`
              footer {
                text-align: center;
                margin: 20px auto;
                max-width: 800px;
              }
              section {
                margin-bottom: 40px;
              }
              h2, h3 {
                color: #333;
              }
              p {
                color: #666;
                line-height: 1.6;
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Zusätzlicher SEO-freundlicher Inhalt */}
          <footer>
            <section>
              <h2>YouTube Thumbnail Downloader - Speichern Sie YouTube-Video-Thumbnails</h2>
              <p>
                Erhalten Sie kostenlose Thumbnail-Bilder von YouTube-Videos in Full HD (1080), HD (720), SD und kleinen Größen. Unterstützte Formate umfassen YouTube-Videos (HD, HQ, 1080p, 4K).
              </p>
            </section>
            <section>
              <h3>Warum unseren YouTube Thumbnail Downloader verwenden?</h3>
              <p>
                Unser YouTube Thumbnail Downloader ermöglicht es Ihnen, Thumbnails von jedem YouTube-Video mühelos abzurufen. Verwenden Sie diese hochwertigen Bilder für Präsentationen, Animationen oder verschiedene andere kreative Projekte.
              </p>
            </section>
            <section>
              <h3>Wie verwenden Sie unseren YouTube Thumbnail Downloader?</h3>
              <p>
                1. Kopieren Sie die URL des YouTube-Videos, dessen Thumbnail Sie möchten.
                <br />
                2. Fügen Sie die URL in das Eingabefeld auf unserer Website ein.
                <br />
                3. Unser Tool generiert automatisch Thumbnails in verschiedenen Größen.
                <br />
                4. Klicken Sie auf die Download-Schaltfläche, um das Thumbnail auf Ihr Gerät herunterzuladen.
              </p>
            </section>
            {/* Weitere Abschnitte wie rechtliche Überlegungen, Kompatibilität und SEO-Ratschläge können hier hinzugefügt werden */}
          </footer>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
