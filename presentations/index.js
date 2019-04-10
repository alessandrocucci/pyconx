// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  S
} from "spectacle";

// Import code slide
import CodeSlide from "../spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "../theme";

// Require CSS
require("normalize.css");
require("../theme/index.css");


const images = {
  logo: require("../assets/images/e3bianconero.png")
};

const snippets = {
  intro: require("raw-loader!../assets/snippets/intro")
};

preloader(images);

const logostyle = {
  position: "fixed",
  bottom: 0,
  right: 0,
  width: "100%",
  maxWidth: "100px"
};

const theme = createTheme({});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Dataclasses:
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              quando una namedtuple non basta!
            </Text>
            <Text margin="100px 0 0" textColor="secondary" size={1} bold>
              Alessandro Cucci
            </Text>
            <Text margin="10px 0 0" textColor="tertiary" size={1}>
              Firenze, 05 Maggio 2019
            </Text>
            <Image src={images.logo} style={logostyle}/>
          </Slide>


          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Alessandro Cucci
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Python Developer @ Energee3
            </Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              PyRE
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Python User Group Reggio Emilia
            </Text>
            <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
              www.pyre.it
            </Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              A tu per tu col Machine Learning
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              thedotcompany
            </Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Dataclasses
            </Heading>
            <Text margin="50px 0 0" textColor="tertiary" size={1} bold>
              Python 3.7
            </Text>
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              PEP 557
            </Text>
          </Slide>


          {/*<Slide transition={["slide", "fade"]} bgColor="tertiary">*/}
          {/*  <CodePane*/}
          {/*    lang="js"*/}
          {/*    source={require("raw-loader!./index.js")}*/}
          {/*    margin="20px auto"*/}
          {/*  />*/}
          {/*</Slide>*/}

          <CodeSlide
            transition={["zoom"]}
            lang="python"
            code={snippets.intro}
            ranges={[
              { loc: [51, 61], title: "Giovani Padawan" },
              { loc: [0, 7] },
              { loc: [8, 13] },
              { loc: [14, 24] },
              { loc: [25, 39], note: "tutti abbiamo scritto questa merda..." },
              { loc: [40, 50], note: "... poi siamo diventati fighi" }
            ]}
          />


          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>
                Grazie a tutti!
              </Quote>
            </BlockQuote>
          </Slide>


        </Deck>
      </Spectacle>
    );
  }
}
