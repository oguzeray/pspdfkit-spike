import { NextApiRequest, NextApiResponse } from 'next'
const doc = `
  <html>
  <head>
  <script src="http://localhost:5000/pspdfkit.js"></script>
  </head>
    <body>
      <div id="pspdfkit" style="width: 90vw; height: 90vh;"></div>
      <script>
  PSPDFKit.load({
    container: "#pspdfkit",
    documentId: "bb16e661-4c93-428b-8b18-281c4aa04c05",
    authPayload: { jwt: "eyJhbGciOiJSUzI1NiJ9.eyJkb2N1bWVudF9pZCI6ImJiMTZlNjYxLTRjOTMtNDI4Yi04YjE4LTI4MWM0YWEwNGMwNSIsInBlcm1pc3Npb25zIjpbInJlYWQtZG9jdW1lbnQiLCJ3cml0ZSIsImRvd25sb2FkIl0sImV4cCI6MTY0MTc4MTMzMn0.R1myIXqcaiHm5PRS0um86eZPwnbuaUmKv3JGKaMff50scrihm-sy5nXD4uIXJJNynUi5jclHoI5UwTTYFHPlIk9RSNoShxMdiJqF48z9K8mgYzlgno3zPdqJMCpmTEuaxtfGcXkYYMD-ceIV8XNC7ceiMHFo5Legz6FZAe-3-XRMdwCi-hjhY_f2_40NworsIqQ0fB9AeSpX-bdHbevB6zQF13xSRJoIQJL1PhV5aycib75c_4hjb6JIjnYiGwzuCBx9vqUowS8BDQI1n4Vp9OY1vxlZmv5gpALzDILRWy7SR7W8XLD-VhpFhY98OA60nCa84m2lDuqjVWslU8A_Yg" },
    instant: true
  })
    .then(function(instance) {
      console.log("PSPDFKit loaded", instance);
    })
    .catch(function(error) {
      console.error(error.message);
    });
</script>
    </body>
  </html>
)`

export default function getMe(_req: NextApiRequest, res: NextApiResponse) {
  res.send(doc)
}
