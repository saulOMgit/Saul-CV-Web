/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Proyecto de Clinica Veterinaria que utilize para iniciarme en Bootstrap</p>";

				const frontmatter = {"title":"Clinica Veterinaria","url":"https://saulomgit.github.io/ClinicaVeterinaria/","tags":["HTML\"","CSS","Bootstrap"],"date":2024};
				const file = "C:/Users/saulo/OneDrive/Documentos/Saul CV Web/src/pages/projects/proyecto4.md";
				const url = "/projects/proyecto4";
				function rawContent() {
					return "\nProyecto de Clinica Veterinaria que utilize para iniciarme en Bootstrap\n";
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
