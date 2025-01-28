/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Galeria de Arte utilizando unicamente HTML, CSS y Bootstrap</p>";

				const frontmatter = {"title":"Galeria de Arte","url":"https://saulomgit.github.io/GaleriaArte/","tags":["HTML\"","CSS","Bootstrap"],"date":2024};
				const file = "C:/Users/saulo/OneDrive/Documentos/Saul CV Web/src/pages/projects/proyecto3.md";
				const url = "/projects/proyecto3";
				function rawContent() {
					return "\nGaleria de Arte utilizando unicamente HTML, CSS y Bootstrap\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
