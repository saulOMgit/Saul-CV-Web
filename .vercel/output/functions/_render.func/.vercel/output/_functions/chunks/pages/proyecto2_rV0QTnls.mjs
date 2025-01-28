/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Proyecto simple de Lista en React para comprobar lo aprendido, utilizando LocalStorage para guardar tus notas y un Bootstrap basico para hacer responsive el proyecto.</p>";

				const frontmatter = {"title":"React To-Do List","url":"https://saultodolist.netlify.app/","tags":["React","JavaScript","HTML","Bootstrap","CSS"],"date":2024};
				const file = "C:/Users/saulo/OneDrive/Documentos/Saul-CV-Web/src/pages/projects/proyecto2.md";
				const url = "/projects/proyecto2";
				function rawContent() {
					return "\r\nProyecto simple de Lista en React para comprobar lo aprendido, utilizando LocalStorage para guardar tus notas y un Bootstrap basico para hacer responsive el proyecto.\r\n";
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
