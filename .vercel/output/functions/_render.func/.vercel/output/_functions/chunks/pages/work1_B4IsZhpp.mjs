/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Desarrollar Webs usualmente de Kit Digital</li>\n<li>Creacion de contenido para webs nuevas o ya existentes via Wordpress</li>\n</ul>";

				const frontmatter = {"title":"Desarrollador Web","date":2024,"location":"Gijón","org":"Basico Estudio","tags":["Front-End","HTML/CSS","React","Wordpress"]};
				const file = "C:/Users/saulo/OneDrive/Documentos/Saul CV Web/src/pages/works/work1.md";
				const url = "/works/work1";
				function rawContent() {
					return "\n- Desarrollar Webs usualmente de Kit Digital\n- Creacion de contenido para webs nuevas o ya existentes via Wordpress\n";
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
