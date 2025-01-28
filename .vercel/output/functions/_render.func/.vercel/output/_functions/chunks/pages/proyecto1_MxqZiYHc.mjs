/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Proyecto de React para informar del lanzamiento de Videojuegos por mes, utilizando Firebase como Base de Datos y Bootstrap para mostrar el contenido.</p>";

				const frontmatter = {"title":"Calendario de Videojuegos","url":"https://calendariodevideojuegos.netlify.app/","tags":["React","JavaScript","Firebase","HTML","Bootstrap","CSS"],"date":2024};
				const file = "C:/Users/saulo/OneDrive/Documentos/Saul-CV-Web/src/pages/projects/proyecto1.md";
				const url = "/projects/proyecto1";
				function rawContent() {
					return "\r\nProyecto de React para informar del lanzamiento de Videojuegos por mes, utilizando Firebase como Base de Datos y Bootstrap para mostrar el contenido.\r\n";
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
