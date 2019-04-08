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
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  // stacks: require("../assets/solutions/queue-stack/stacks-on-stacks.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#fe9b00"
});

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
          </Slide>


          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Alessandro Cucci
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Python Developer @ Energee3
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
            transition={["slide", "fade"]}
            lang="js"
            code={require("raw-loader!./index.js")}
            ranges={[
              { loc: [0, 80], title: "Queue Stack" },
              { loc: [0, 16], note: "define a stack" },
              { loc: [19, 21], note: "we have our two stacks" },
              { loc: [22, 25], note: "enqueue works the same as a normal queue"},
              { loc: [26, 36], note: "dequeue will be more involved"},
              { loc: [27, 30], note: "we need to empty inbox and push everything into outbux while doing so"},
              { loc: [30, 31], note: "popping off outbox gives first item in inbox - we save it in temp"},
              { loc: [31, 34], note: "now we have to empty the outbox and put everything back into the inbox"},
              { loc: [34, 35], note: "we return the value we saved to temp as the dequeued number"}
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
