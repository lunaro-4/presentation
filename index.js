import Marpit from '@marp-team/marpit'
import fs from 'fs'

// 1. Create instance (with options if you want)
const marpit = new Marpit.Marpit()

//
	// :root{
	// 	--prim: #F8F6E3;
	// 	/*--sec: #97E7E1;
	// 	--tint: #6AD4DD;
	// 	--acc: #7AA2E3; */
	// 	--sec: #83B4FF;
	// 	--tint: #5A72A0;
	// 	--acc: #1A2130; 
	//
	// }
// 2. Add theme CSS
const theme = `
/* @theme my-theme */
	:root{
		--back: #FED8B1;
		--head: #6F4E37;
		--sec: #A67B5B;
		--text: #1A2130; 
		--acc: #ECB176;

	}

	section {
		font-size: 30px;
		font: 1rem "Fira Sans", sans-serif;;
		padding: 40px;
		background-color: var(--back);
		color: var(--text);
		color: #000;
	}
	h1 {
		color: var(--head);
	}
`
// `
// /* @theme example */
//
// section {
//   background-color: #369;
//   color: #fff;
//   font-size: 30px;
//   padding: 40px;
// }
//
// h1,
// h2 {
//   text-align: center;
//   margin: 0;
// }
//
// h1 {
//   color: #8cf;
// }
// `
marpit.themeSet.default = marpit.themeSet.add(theme)


let markdown = ''
try{
markdown =  fs.readFileSync('./index.md', 'utf8');
} catch (err){
	console.log(err)
}
// console.log(markdown)

// 3. Render markdown
// const markdown = `
//
// # Hello, Marpit!
//
// Marpit is the skinny framework for creating slide deck from Markdown.
//
// ---
//
// ## Ready to convert into PDF!
//
// You can convert into PDF slide deck through Chrome.
//
// `
const { html, css } = marpit.render(markdown)

// 4. Use output in your HTML
const htmlFile = `
<!DOCTYPE html>
<html><body>
  <style>${css}</style>
  ${html}
</body></html>
`
fs.writeFileSync('index.html', htmlFile.trim())
