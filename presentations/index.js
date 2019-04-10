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
import Terminal from "spectacle-terminal";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "../theme";

// Require CSS
require("normalize.css");
require("../theme/index.css");


const images = {
  logo: require("../assets/images/e3bianconero.png"),
  pyre: require("../assets/images/pyre.png"),
  libro: require("../assets/images/libro.png")
};

const snippets = {
  intro: require("raw-loader!../assets/snippets/intro"),
  introdataclasses: require("raw-loader!../assets/snippets/introdataclasses"),
  intronamedtuple1a: require("raw-loader!../assets/snippets/intronamedtuple1a"),
  intronamedtuple1b: require("raw-loader!../assets/snippets/intronamedtuple1b"),
  intronamedtuple2: require("raw-loader!../assets/snippets/intronamedtuple2")
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
            <Image src={images.pyre}/>
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              www.pyre.it
            </Text>
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              t.me/pyreit
            </Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Image src={images.libro} style={{
              width: "100%",
              maxWidth: "400px"
            }}/>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Layout>
              <Fill>
                <Text margin="10px 0 0" textColor="secondary" size={1} bold>
                  Dataclasses
                </Text>
                <Appear>
                  <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                    3.7
                  </Text>
                </Appear>
              </Fill>
              <Appear>
                <Fill>
                  <Text margin="10px 0 0" textColor="secondary" size={1} bold>
                    Namedtuple
                  </Text>
                    <Appear>
                      <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                        - collection: 2.6
                      </Text>
                    </Appear>
                    <Appear>
                      <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
                        - typing: 3.5
                      </Text>
                    </Appear>
                </Fill>
              </Appear>
            </Layout>
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
            code={snippets.intro}
            lang="python"
            ranges={[
              { loc: [0, 3] }
            ]}
          />

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Layout>
              <Fill>
                <CodePane
                    lang="python"
                    source={snippets.intronamedtuple1a}
                />
              </Fill>
              <Fill>
                <CodePane
                    lang="python"
                    source={snippets.intronamedtuple1b}
                />
              </Fill>
            </Layout>
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.intronamedtuple2}
            lang="python"
            ranges={[
              { loc: [0, 8] }
            ]}
          />

          <Slide transition={["slide", "fade"]}>
            <Terminal title="1. alessandro@energee3: ~(zsh)" output={[
              <div>
                <div>$ python</div>
                <div>Python 3.7.0 (default, Jun 28 2018, 07:39:16)</div>
                <div>[Clang 4.0.1 (tags/RELEASE_401/final)] :: Anaconda custom (64-bit) on darwin</div>
                <div>Type "help", "copyright", "credits" or "license" for more information.</div>
                <div>>>></div>
              </div>,
              <div>>>> from collections import namedtuple</div>,
              <div>>>> Utente = namedtuple("Utente", "nome cognome email")</div>,
              <div>>>> a = Utente("Alessandro", "Cucci", "alessandro.cucci@energee3.com")</div>,
              <div>>>> a[1]</div>,
              <div>Cucci</div>,
              <div>>>> a.nome</div>,
              <div>Alessandro</div>
            ]}
            />
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.intronamedtuple2}
            lang="python"
            ranges={[
              { loc: [9, 13] }
            ]}
          />

          <Slide transition={["slide", "fade"]}>
            <Terminal title="1. alessandro@energee3: ~(zsh)" output={[
              <div>
                <div>>>> from collections import namedtuple</div>
                <div>>>> Utente = namedtuple("Utente", "nome cognome email")</div>
                <div>>>> a = Utente("Alessandro", "Cucci", "alessandro.cucci@energee3.com")</div>
              </div>,
              <div>>>> a._asdict()</div>,
              <div>
                <div>OrderedDict([</div>
                <div>    ('nome', 'Alessandro'), </div>
                <div>    ('cognome', 'Cucci'), </div>
                <div>    ('email', 'alessandro.cucci@energee3.com')</div>
                <div>])</div>
              </div>
            ]}
            />
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.intronamedtuple2}
            lang="python"
            ranges={[
              { loc: [14, 18] }
            ]}
          />

          <Slide transition={["slide", "fade"]}>
            <Terminal title="1. alessandro@energee3: ~(zsh)" output={[
              <div>
                <div>>>> from collections import namedtuple</div>
                <div>>>> Utente = namedtuple("Utente", "nome cognome email")</div>
                <div>>>> a = Utente("Alessandro", "Cucci", "alessandro.cucci@energee3.com")</div>
              </div>,
              <div>
                <div>>>> import json</div>
                <div>>>> json.dumps(a)</div>
                <div>'["Alessandro", "Cucci", "alessandro.cucci@energee3.com"]'</div>
              </div>,
              <div>
                <div>>>> import pickle</div>
                <div>>>> pickle.loads(pickle.dumps(a))</div>
                <div>Utente(nome='Alessandro', cognome='Cucci', email='alessandro.cucci@energee3.com')</div>
              </div>,
            ]}
            />
          </Slide>


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
