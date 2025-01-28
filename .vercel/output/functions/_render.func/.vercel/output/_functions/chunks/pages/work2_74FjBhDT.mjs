/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Personalización de la solución de la empresa (Software de Gestion de Almacenes) para satisfacer las necesidades del cliente</li>\n<li>Identificación y Solución de problemas que pudieran surgir en producción de los proyectos recien estrenados.</li>\n</ul>";

				const frontmatter = {"title":"DevOps","date":2023,"location":"Gijón","org":"Mecalux Software Solutions","tags":["C#","Scripting","Bases de Datos","Virtualización"]};
				const file = "C:/Users/saulo/OneDrive/Documentos/Saul CV Web/src/pages/works/work2.md";
				const url = "/works/work2";
				function rawContent() {
					return "\n- Personalización de la solución de la empresa (Software de Gestion de Almacenes) para satisfacer las necesidades del cliente\n- Identificación y Solución de problemas que pudieran surgir en producción de los proyectos recien estrenados.\n";
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
