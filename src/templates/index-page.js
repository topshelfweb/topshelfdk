import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ContactForm from "../components/contact-form";
import Services from "../components/services";
import "./index-page.css";

export function IndexPageTemplate({ hero , phonenumber, contacttext, address, services}) {
	return (
		<>
			<Hero
				hero={hero}
				phonenumber={phonenumber} />
			
			<section className="wrapper container" id="services">
				<h1>Hvad kan vi tilbyde dig?</h1>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem pariatur, omnis accusamus dolore mollitia tempora quod. Officia aut vero cumque nobis, provident animi, optio, nostrum perferendis alias ipsum tempora magni.</p>
				<Services services={services} />
			</section>

			<ContactForm
				contacttext={contacttext}
				phonenumber={phonenumber}
				address={address}
			/>

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
				phonenumber={ frontmatter.phonenumber }
				contacttext={ frontmatter.contacttext }
				address={frontmatter.address}
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
					image {
						childImageSharp {
							fluid(quality: 90, maxWidth: 1000) {
								...GatsbyImageSharpFluid_tracedSVG
							}
						}
					}
				}
				phonenumber
				contacttext
				address {
					name
					street
					zip
					city
				}
				employees {
					name
					title
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
