import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ContactForm from "../components/contact-form";
import Services from "../components/services";
import "./index-page.css";

export function IndexPageTemplate({ hero, contact, services}) {
	return (
		<>
			<section className="wrapper container sectionPage" id="services">
				<h1>Hvad kan vi tilbyde dig?</h1>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem pariatur, omnis accusamus dolore mollitia tempora quod. Officia aut vero cumque nobis, provident animi, optio, nostrum perferendis alias ipsum tempora magni.</p>
				<Services data={services} />
			</section>

			<ContactForm data={contact} />

			<footer style={{
				backgroundColor: "hsl(0, 0%, 16%)",
				height: "500px"
			}}/>
		</>
	);
}

export default function IndexPage({ data }) {
	const { frontmatter } = data.markdownRemark;
	return (
		<Layout>
			<IndexPageTemplate
				hero={ frontmatter.hero }
				contact={ frontmatter.contact }
				services={frontmatter.services}
			/>
		</Layout>
	);
}

export const pageQuery = graphql`
	query IndexPage {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				hero {
					caption
					cta
					image {
						childImageSharp {
							fluid(quality: 90, maxWidth: 1000) {
								...GatsbyImageSharpFluid_tracedSVG
							}
						}
					}
				}
				contact {
					address {
						city
						name
						street
						zip
						email
						phonenumber
					}
					heading
					content
				}
				services {
					title
					image {
						publicURL
					}
					content
				}
			}
		}
	}
`;
