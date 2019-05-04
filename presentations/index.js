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
import Terminal from "../spectacle-terminal";

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
  intronamedtuple2: require("raw-loader!../assets/snippets/intronamedtuple2"),
  typenamedtuple: require("raw-loader!../assets/snippets/typenamedtuple"),
  dataclassi1: require("raw-loader!../assets/snippets/dataclassi1"),
  dataclassi2: require("raw-loader!../assets/snippets/dataclassi2"),
  postinit: require("raw-loader!../assets/snippets/postinit"),
  order: require("raw-loader!../assets/snippets/order"),
  freeze: require("raw-loader!../assets/snippets/freeze"),
  fieldsdefault: require("raw-loader!../assets/snippets/fieldsdefault"),
  fieldsdefaultfactory: require("raw-loader!../assets/snippets/fieldsdefaultfactory"),
  asdict: require("raw-loader!../assets/snippets/asdict"),
  astuple: require("raw-loader!../assets/snippets/astuple"),
  replace: require("raw-loader!../assets/snippets/replace"),
  isdataclass: require("raw-loader!../assets/snippets/isdataclass")
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
            <Image src={images.libro} style={{
              width: "100%",
              maxWidth: "400px"
            }}/>
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
                <div>>>> from collections import namedtuple</div>
                <div>>>> Utente = namedtuple("Utente", "nome cognome email")</div>
                <div>>>> u = Utente("Tony", "Stark", "iamironman@starkindustries.com")</div>
              </div>,
              <div>>>> u[1]</div>,
              <div>Stark</div>,
              <div>>>> u.email</div>,
              <div>iamironman@starkindustries.com</div>
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
                <div>>>> u = Utente("Tony", "Stark", "iamironman@starkindustries.com")</div>
              </div>,
              <div>>>> u._asdict()</div>,
              <div>
                <div>OrderedDict([</div>
                <div>    ('nome', 'Tony'), </div>
                <div>    ('cognome', 'Stark'), </div>
                <div>    ('email', 'iamironman@starkindustries.com')</div>
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
                <div>>>> u = Utente("Tony", "Stark", "iamironman@starkindustries.com")</div>
              </div>,
              <div>
                <div>>>> import json</div>
                <div>>>> json.dumps(a)</div>
                <div>'["Tony", "Stark", "iamironman@starkindustries.com"]'</div>
              </div>
            ]}
            />
          </Slide>

          <Slide transition={["slide", "fade"]}>
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              Le tuple sono immutabili!
            </Text>
            <Terminal margin="30px 0 0" title="1. alessandro@energee3: ~(zsh)" output={[
              <div>
                <div>>>> from collections import namedtuple</div>
                <div>>>> Utente = namedtuple("Utente", "nome cognome email")</div>
                <div>>>> u = Utente("Tony", "Stark", "iamironman@starkindustries.com")</div>
              </div>,
              <div>
                <div>>>> u.nome = "Ned"</div>
                <div>Traceback (most recent call last):</div>
                <div>  File "&lt;stdin&gt;", line 1, in &lt;module&gt;</div>
                <div>AttributeError: can't set attribute</div>
              </div>
            ]}
            />
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.intronamedtuple2}
            lang="python"
            ranges={[
              { loc: [18, 24] },
              { loc: [25, 34] },
              { loc: [35, 45] }
            ]}
          />

          <Slide transition={["slide", "fade"]}>
            <Terminal title="1. alessandro@energee3: ~(zsh)" output={[
              <div>
                <div>>>> from collections import namedtuple</div>
                <div>>>> Utente = namedtuple("Utente", "nome cognome email")</div>
                <div>>>> a = Utente("Tony", "Stark", "iamironman@starkindustries.com")</div>
              </div>,
              <div>
                <div>>>> a._replace(nome="Ned", email="winteriscoming@carrierpigeons.net")</div>
                <div>Utente(nome='Ned', cognome='Stark', email='winteriscoming@carrierpigeons.net')</div>
              </div>,
              <div>
                <div>>>> a</div>
                <div>Utente(nome='Tony', cognome='Stark', email='iamironman@starkindustries.com')</div>
              </div>,
              <div>
                <div>>>> b = a._replace(nome="Ned", email="winteriscoming@carrierpigeons.net")</div>
                <div>>>> a is b</div>
                <div>False</div>
              </div>
            ]}
            />
          </Slide>

          <Slide transition={["slide", "fade"]}>
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              Defaults
            </Text>
            <Terminal title="1. alessandro@energee3: ~(zsh)" output={[
              <div>
                <div>>>> from collections import namedtuple</div>
                <div>>>> Utente = namedtuple("Utente", "nome cognome email")</div>
                <div>>>> a = Utente(nome='Tony', cognome='Stark')</div>
              </div>,
              <div>
                <div>Traceback (most recent call last):</div>
                <div> File "&lt;stdin&gt;", line 1, in &lt;module&gt;</div>
                <div>TypeError: __new__() missing 1 required positional argument: 'email'</div>
              </div>
            ]}
            />
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.typenamedtuple}
            lang="python"
            ranges={[
              { loc: [0, 6] }
            ]}
          />

          <Slide transition={["slide", "fade"]}>
            <Terminal title="1. alessandro@energee3: ~(zsh)" output={[
              <div>
                <div>>>> Utente(nome='Tony', cognome='Stark')</div>
                <div>Utente(nome='Tony', cognome='Stark', email='')</div>
              </div>
            ]}
            />
          </Slide>

          <Slide transition={["slide", "fade"]}>
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              Le tuple sono immutabili!
            </Text>
            <Terminal margin="30px 0 0" title="1. alessandro@energee3: ~(zsh)" output={[
              <div>
                <div>>>> a = Utente(nome='Tony', cognome='Stark')</div>
                <div>>>> a.email = "iamironman@starkindustries.com"</div>
                <div>Traceback (most recent call last):</div>
                <div>  File "&lt;stdin&gt;", line 1, in &lt;module&gt;</div>
                <div>AttributeError: can't set attribute</div>
              </div>
            ]}
            />
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.dataclassi1}
            lang="python"
            ranges={[
              { loc: [0, 8] }
            ]}
          />

          <CodeSlide
            transition={["zoom"]}
            code={snippets.dataclassi2}
            lang="python"
            ranges={[
              { loc: [0, 16] },
              { loc: [17, 23] },
              { loc: [24, 34], note: "La classe è importante!" }
            ]}
          />

          <Slide transition={["slide", "fade"]}>
            <Terminal title="1. alessandro@energee3: ~(zsh)" output={[
              <div>
                <div>>>> from collections import namedtuple</div>
                <div>>>></div>
                <div>>>> Personale = namedtuple("Personale", "nome cognome")</div>
                <div>>>> Utente = namedtuple("Utente", "nome cognome")</div>
                <div>>>></div>
                <div>>>> p = Personale("Alessandro", "Cucci")</div>
                <div>>>> u = Utente("Alessandro", "Cucci")</div>
                <div>>>></div>
                <div>>>> p == u</div>
                <div>True</div>
              </div>,
              <div>
                <div>>>> from dataclasses import dataclass</div>
                <div>>>></div>
                <div>>>> @dataclass</div>
                <div>... class Personale:</div>
                <div>...     nome: str</div>
                <div>...     cognome: str</div>
                <div>...</div>
              </div>,
              <div>
                <div>>>> @dataclass</div>
                <div>... class Utente:</div>
                <div>...     nome: str</div>
                <div>...     cognome: str</div>
                <div>...</div>
              </div>,
              <div>
                <div>>>> p = Personale("Alessandro", "Cucci")</div>
                <div>>>> u = Utente("Alessandro", "Cucci")</div>
                <div>>>></div>
                <div>>>> p == u</div>
                <div>False</div>
              </div>
            ]}
            />
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              Parametri accettati da @dataclass
            </Text>
            <Appear>
              <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - init=True
              </Text>
            </Appear>
            <Appear>
              <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - repr=True
              </Text>
            </Appear>
            <Appear>
              <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - eq=True
              </Text>
            </Appear>
            <Appear>
              <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - order=False
              </Text>
            </Appear>
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.order}
            lang="python"
            ranges={[
              { loc: [0, 8] },
              { loc: [10, 18] },
              { loc: [20, 28] },
              { loc: [30, 38] }
            ]}
          />

          <Slide transition={["zoom"]} bgColor="primary">
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              Parametri accettati da @dataclass
            </Text>
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - init=True
            </Text>
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
              - repr=True
            </Text>
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
              - eq=True
            </Text>
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
              - order=False
            </Text>
            <Appear>
              <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - frozen=False
              </Text>
            </Appear>
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.freeze}
            lang="python"
            ranges={[
              { loc: [0, 4] },
              { loc: [6, 11] }
            ]}
          />

          <Slide transition={["zoom"]} bgColor="primary">
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              Performance
            </Text>
            <Appear>
              <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - metodi Python generati
              </Text>
            </Appear>
            <Appear>
              <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - le tuple sono scritte in C
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["slide", "fade"]}>
            <Terminal margin="30px 0 0" title="1. alessandro@energee3: ~(zsh)" output={[
              <div>
                <div>>>> @dataclass(order=True, frozen=True)</div>
                <div>... class PersonaleDT:</div>
                <div>...     nome: str</div>
                <div>...     cognome: str</div>
                <div>...</div>
              </div>,
              <div>>>> PersonaleNT = namedtuple("PersonaleNT", "nome cognome")</div>,
              <div>
                <div>>>> dt = PersonaleDT("Alessandro", "Cucci")</div>
                <div>>>> nt = PersonaleNT("Alessandro", "Cucci")</div>
              </div>,
              <div>
                <div>>>> import sys</div>
                <div>>>> sys.getsizeof(dt)</div>
                <div>56</div>
                <div>>>> sys.getsizeof(nt)</div>
                <div>64</div>
              </div>,
              <div>
                <div>>>> import timeit</div>
                <div>>>> min(timeit.repeat('dt.nome', 'from __main__ import dt'))</div>
                <div>0.03248705200002178</div>
                <div>>>> min(timeit.repeat('nt.nome', 'from __main__ import nt'))</div>
                <div>0.054184894999991684</div>
              </div>
            ]}
            />
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              Il metodo field()
            </Text>
            <Appear>
              <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - default
              </Text>
            </Appear>
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.fieldsdefault}
            lang="python"
            ranges={[
              { loc: [0, 9] }
            ]}
          />

          <Slide transition={["zoom"]} bgColor="primary">
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              Il metodo field()
            </Text>
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
              - default
            </Text>
            <Appear>
              <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - default_factory
              </Text>
            </Appear>
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.fieldsdefaultfactory}
            lang="python"
            ranges={[
              { loc: [0, 9] }
            ]}
          />

          <Slide transition={["slide", "fade"]}>
            <Terminal margin="30px 0 0" title="1. alessandro@energee3: ~(zsh)" output={[
              <div>
                <div>>>> u1 = Utente("Alessandro")</div>
                <div>>>> u1.aggiungi_amico("Andrea")</div>
                <div>>>> u1.lista_amici</div>
                <div>['Andrea']</div>
              </div>,
              <div>>>> u2 = Utente("Marco")</div>,
              <div>>>> u2.lista_amici</div>,
              <div>['Andrea']</div>
            ]}
            />
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.fieldsdefaultfactory}
            lang="python"
            ranges={[
              { loc: [0, 9] },
              { loc: [11, 18] }
            ]}
          />

          <Slide transition={["slide", "fade"]}>
            <Quote margin="30px 0 0" textColor="tertiary" size={1} bold>
              ValueError: mutable default &lt;class 'list'&gt; for field lista_amici is not allowed: use default_factory
            </Quote>
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.fieldsdefaultfactory}
            lang="python"
            ranges={[
              { loc: [20, 27] }
            ]}
          />

          <Slide transition={["slide", "fade"]}>
            <Terminal margin="30px 0 0" title="1. alessandro@energee3: ~(zsh)" output={[
              <div>
                <div>>>> u1 = Utente("Alessandro")</div>
                <div>>>> u1.aggiungi_amico("Andrea")</div>
                <div>>>> u1.lista_amici</div>
                <div>['Andrea']</div>
              </div>,
              <div>>>> u2 = Utente("Marco")</div>,
              <div>>>> u2.lista_amici</div>,
              <div>[]</div>
            ]}
            />
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              Il metodo field()
            </Text>
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
              - default
            </Text>
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
              - default_factory
            </Text>
            <Appear>
              <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - init
              </Text>
            </Appear>
            <Appear>
              <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - repr
              </Text>
            </Appear>
            <Appear>
              <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - compare
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
              il metoto __post_init__
            </Text>
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.postinit}
            lang="python"
            ranges={[
              { loc: [0, 8] }
            ]}
          />

          <Slide transition={["slide", "fade"]}>
            <Terminal margin="30px 0 0" title="1. alessandro@energee3: ~(zsh)" output={[
              <div>
                <div>>>> o = Ordine(10, 5)</div>
                <div>>>> o.qta</div>
              </div>,
              <div>5</div>,
              <div>>>> repr(o)</div>,
              <div>'Ordine(qta_ordinata=10, qta_annullata=5)'</div>
            ]}
            />
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.postinit}
            lang="python"
            ranges={[
              { loc: [10, 18] }
            ]}
          />

          <Slide transition={["slide", "fade"]}>
            <Terminal margin="30px 0 0" title="1. alessandro@energee3: ~(zsh)" output={[
              <div>
                <div>>>> o = Ordine(10, 5)</div>
                <div>>>> o.qta</div>
              </div>,
              <div>5</div>,
              <div>>>> repr(o)</div>,
              <div>'Ordine(qta_ordinata=10, qta_annullata=5, qta=5)'</div>
            ]}
            />
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              Metodi di comodo
            </Text>
            <Appear>
              <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - asdict
              </Text>
            </Appear>
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.asdict}
            lang="python"
            ranges={[
              { loc: [0, 5] }
            ]}
          />

          <Slide transition={["zoom"]} bgColor="primary">
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              Metodi di comodo
            </Text>
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
              - asdict
            </Text>
            <Appear>
              <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - astuple
              </Text>
            </Appear>
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.astuple}
            lang="python"
            ranges={[
              { loc: [0, 5] }
            ]}
          />

          <Slide transition={["zoom"]} bgColor="primary">
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              Metodi di comodo
            </Text>
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
              - asdict
            </Text>
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
              - astuple
            </Text>
            <Appear>
              <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - replace
              </Text>
            </Appear>
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.replace}
            lang="python"
            ranges={[
              { loc: [0, 6] },
              { loc: [7, 9] }
            ]}
          />

          <Slide transition={["zoom"]} bgColor="primary">
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              Metodi di comodo
            </Text>
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
              - asdict
            </Text>
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
              - astuple
            </Text>
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
              - replace
            </Text>
            <Appear>
              <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                - is_dataclass
              </Text>
            </Appear>
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            code={snippets.isdataclass}
            lang="python"
            ranges={[
              { loc: [0, 5] },
              { loc: [6, 8] },
              { loc: [9, 12] }
            ]}
          />

          <Slide transition={["zoom"]} bgColor="primary">
            <Layout>
              <Fill>
                <Text margin="10px 0 0" textColor="secondary" size={1} bold>
                  Dataclasses
                </Text>
                <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                  replace()
                </Text>
                <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
                  asdict() -> dict
                </Text>
                <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
                  astuple()
                </Text>
                <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
                  Mutevoli
                </Text>
                <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
                  Non iterabili
                </Text>
              </Fill>
              <Appear>
                <Fill>
                  <Text margin="10px 0 0" textColor="secondary" size={1} bold>
                    Namedtuple
                  </Text>
                    <Appear>
                      <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                        _replace()
                      </Text>
                    </Appear>
                    <Appear>
                      <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
                        _asdict() -> OrderedDict
                      </Text>
                    </Appear>
                    <Appear>
                      <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
                        tuple()
                      </Text>
                    </Appear>
                    <Appear>
                      <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
                        Immutabili
                      </Text>
                    </Appear>
                    <Appear>
                      <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
                        Iterabili
                      </Text>
                    </Appear>
                </Fill>
              </Appear>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>
                Grazie a tutti!
              </Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              Riferimenti
            </Text>
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
                https://www.python.org/dev/peps/pep-0557/
            </Text>
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
              https://docs.python.org/3/library/dataclasses.html
            </Text>
            <Text margin="30px 0 0" textColor="tertiary" size={1} bold>
              https://github.com/alessandrocucci/pyconx
            </Text>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
