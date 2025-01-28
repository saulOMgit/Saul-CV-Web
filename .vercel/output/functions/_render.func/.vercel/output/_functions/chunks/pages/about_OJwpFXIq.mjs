/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Desarrollador web junior con experiencia en HTML, CSS, JavaScript y Java. Apasionado por el aprendizaje continuo y la creación de experiencias web funcionales y atractivas. Enfocado en mantenerme al día con las últimas tecnologías y tendencias del desarrollo web, y en contribuir al éxito de los equipos en los que colaboro. Abierto a nuevas oportunidades y conexiones para seguir creciendo en esta emocionante industria.</p>";

				const frontmatter = {"title":"about","name":"Saul Otero Melchor","designation":"Desarrollador Web","location":"Gijon, Asturias","pronouns":"he/him/el","website":""};
				const file = "C:/Users/saulo/OneDrive/Documentos/Saul-CV-Web/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\r\nDesarrollador web junior con experiencia en HTML, CSS, JavaScript y Java. Apasionado por el aprendizaje continuo y la creación de experiencias web funcionales y atractivas. Enfocado en mantenerme al día con las últimas tecnologías y tendencias del desarrollo web, y en contribuir al éxito de los equipos en los que colaboro. Abierto a nuevas oportunidades y conexiones para seguir creciendo en esta emocionante industria.";
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
