import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Infobox = styled.table`
  font-family: sans-serif;
  direction: ltr;
  border: 1px solid #a2a9b1;
  border-spacing: 3px;
  background-color: #f8f9fa;
  color: black;
  margin: 0.5em 0 0.5em 1em;
  padding: 0.2em;
  float: right;
  clear: right;
  font-size: 88%;
  width: 22em;
  line-height: 1.2em;
`

const Caption = styled.caption`
  font-family: sans-serif;
  direction: ltr;
  border-spacing: 3px;
  color: black;
  font-size: 125%;
  font-weight: bold;
  padding: 0.2em;
  line-height: 1.5em;
  text-align: center;
`

const Td1 = styled.td`
  font-family: sans-serif;
  direction: ltr;
  border-spacing: 3px;
  color: black;
  font-size: 88%;
  line-height: 1.2em;
  vertical-align: top;
  text-align: center;
`

const Td2 = styled.td`
  font-family: sans-serif;
  direction: ltr;
  border-spacing: 3px;
  color: black;
  font-size: 88%;
  line-height: 1.2em;
  text-align: left;
  vertical-align: baseline;
  white-space: normal;
  padding-top: 0.3em;
  padding-bottom: calc(0.3rem - 1px);
`

const Th1 = styled.th`
  font-family: sans-serif;
  direction: ltr;
  border-spacing: 3px;
  color: black;
  font-size: 88%;
  vertical-align: top;
  text-align: center;
  background-color: #b0c4de;
  line-height: 1.5em;
  padding-top: 0.3em;
  padding-bottom: calc(0.3rem - 1px);
`

const Th2 = styled.th`
  font-family: sans-serif;
  direction: ltr;
  border-spacing: 3px;
  color: black;
  font-size: 88%;
  line-height: 1.2em;
  white-space: nowrap;
  vertical-align: baseline;
  text-align: left;
  padding-top: 0.3em;
  padding-bottom: calc(0.3rem - 1px);
`

const Th3 = styled.th`
  font-family: sans-serif;
  direction: ltr;
  border-spacing: 3px;
  color: black;
  font-size: 88%;
  line-height: 1.2em;
  white-space: nowrap;
  vertical-align: baseline;
  text-align: left;
  font-weight: normal;
  padding-top: 0.3em;
  padding-bottom: calc(0.3rem - 1px);
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Experience" />
        <Infobox>
          <Caption>Donny Ostrianto</Caption>
          <tbody>
            <tr>
              <Td1 colSpan="4">
                <img alt="Pedri.png"
                  src="https://cdn.iconscout.com/icon/free/png-512/portrait-3035905-2556633.png"
                  decoding="async"
                  width="200"
                  height="300" />
                <div>Donny in September 2019</div>
              </Td1>
            </tr>
            <tr>
              <Th1 colSpan="4">Personal information</Th1>
            </tr>
            <tr>
              <Th2>Full name</Th2>
              <Td2 colSpan="3">
                Donny Ostrianto Sundawa
              </Td2>
            </tr>
            <tr>
              <Th2>Date of birth</Th2>
              <Td2 colSpan="3">
                11 October 1989<span> (age 31)</span>
              </Td2>
            </tr>
            <tr>
              <Th2>Place of birth</Th2>
              <Td2 colSpan="3">
                Bandung, Indonesia
              </Td2>
            </tr>
            <tr>
              <Th2>Height</Th2>
              <Td2 colSpan="3">
                1.81 m
              </Td2>
            </tr>
            <tr>
              <Th2>Position(s)</Th2>
              <Td2 colSpan="3">
                Software engineer, System analyst, Quality assurance, Scrum master
              </Td2>
            </tr>
            <tr>
              <Th1 colSpan="4">Career information</Th1>
            </tr>
            <tr>
              <Th2>Current team</Th2>
              <Td2 colSpan="3">
                Bibit
              </Td2>
            </tr>
            <tr>
              <Th2>Role</Th2>
              <Td2 colSpan="3">
                Back end engineer
              </Td2>
            </tr>
            <tr>
              <Th1 colSpan="4">Education</Th1>
            </tr>
            <tr>
              <Th3>2007 - 2010</Th3>
              <Td2 colSpan="3">
                Politeknik Negeri Bandung<br/>
                Associate degree, Computer Engineering
              </Td2>
            </tr>
            <tr>
              <Th3>2021 - 2022</Th3>
              <Td2 colSpan="3">
                Universitas Bakrie<br/>
                Bachelor degree, Informatics
              </Td2>
            </tr>
            <tr>
              <Th1 colSpan="4">Career history</Th1>
            </tr>
            <tr>
              <Th3>Nov 2010 - Jan 2013</Th3>
              <Td2 colSpan="3">
                Bee Solution Partners
              </Td2>
            </tr>
            <tr>
              <Th3>Feb 2013 - Jan 2015</Th3>
              <Td2 colSpan="3">
                Tech Mahindra
              </Td2>
            </tr>
            <tr>
              <Th3>Jan 2015 - Dec 2017</Th3>
              <Td2 colSpan="3">
                Inmagine 123RF
              </Td2>
            </tr>
            <tr>
              <Th3>Jan 2018 - Jun 2018</Th3>
              <Td2 colSpan="3">
                Teleo Labs
              </Td2>
            </tr>
            <tr>
              <Th3>Aug 2018 - Dec 2020</Th3>
              <Td2 colSpan="3">
                Ritase
              </Td2>
            </tr>
            <tr>
              <Th3>Jan 2021 - present</Th3>
              <Td2 colSpan="3">
                Bibit
              </Td2>
            </tr>
          </tbody>
        </Infobox>
        <h2>Experience</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
