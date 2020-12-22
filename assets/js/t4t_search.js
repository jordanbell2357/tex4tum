// Fuse (Fuzzy Search Library)
// ====================================================================

var search_index = [{"url":"actuator","title":"Actuator","tags":[],"sections":[]},{"url":"servo","title":"Servo Motor","tags":["motor","pwm"],"sections":["Colored Wires","Control","References"]},{"url":"bus","title":"Bus","tags":[],"sections":["References"]},{"url":"i2c","title":"Inter-Integrated Circuit (I2C)","tags":["bus","I2C","SDA","SCK"],"sections":["Specification","Protocol","References"]},{"url":"spi","title":"Serial Peripheral Interface (SPI)","tags":["bus","SPI","MOSI","MISO"],"sections":["Specification","Protocol"]},{"url":"usart","title":"Universal Asynchronous Receiver Transmitter (UART)","tags":["bus","UART","RX","TX","RTS","CTS"],"sections":["Specification","Protocol"]},{"url":"usb","title":"Universal Serial Bus (USB)","tags":["USB","Type-C"],"sections":["Overview","USB 2.0","USB 3.0","References"]},{"url":"cmos","title":"CMOS","tags":["mosfet","inverter","nand","nor","not"],"sections":["Parameters","Inverter Power"]},{"url":"component","title":"Component","tags":[],"sections":["Types of Components","Two Terminals","Three Terminal","More Terminal"]},{"url":"op-amp","title":"Operational Amplifier","tags":["opamp","non-inverting","schmitt trigger"],"sections":["Voltage Follower/Buffer","Non-Inverting Amplifier","Inverting Amplifier","Differential Amplifier","Schmitt-Trigger"]},{"url":"transistor","title":"Transistor","tags":["bipolar","bjt","mosfet"],"sections":["Bipolar Transistor (BJT)","MOS-FET"]},{"url":"computer","title":"Computer","tags":[],"sections":[]},{"url":"processor","title":"Central Processing Unit (CPU)","tags":["CPU,","ALU"],"sections":["Stages"]},{"url":"psu","title":"Power Supply Unit (PSU)","tags":["Netzteil"],"sections":["Color Codes of ATX","Efficiency Rating (80 PLUS)","References"]},{"url":"ram","title":"Random Access Memory (RAM)","tags":["RAM"],"sections":["DRAM","SRAM"]},{"url":"dsp","title":"Signal Processing","tags":[],"sections":[]},{"url":"filter","title":"Digital Filter","tags":["FIR","IIR"],"sections":["FIR Filter","IIR Filter"]},{"url":"kalman-filter","title":"Kalman Filter","tags":[],"sections":["Working Principle","Defining the Model","Calculations","Extended Kalman Filter","Sensor Fusion","References"]},{"url":"low-pass","title":"Low Pass Filter","tags":[],"sections":["Filter Response:"]},{"url":"modulation","title":"Modulation","tags":[],"sections":["Analog modulation","Digital modulation","References"]},{"url":"signal","title":"Signal","tags":[],"sections":["Signal Categories","Signals and Spectrum"]},{"url":"electronics","title":"Electronics","tags":[],"sections":[]},{"url":"glossary","title":"Glossary","tags":[],"sections":[]},{"url":"index","title":"Tex4TUM","tags":[],"sections":["Features"]},{"url":"datastructures","title":"Datastructures","tags":[],"sections":["Primitive Data Structures","Container (Advanced abstract data types)"]},{"url":"uri","title":"Uniform Resource Identifier (URI)","tags":["URI","URL","URN"],"sections":["Syntax","URI Parser","Escape Characters","Relationship to URN and URL","References"]},{"url":"informatics","title":"Information Theory","tags":[],"sections":[]},{"url":"ada","title":"Ada","tags":[],"sections":["Data Types","References"]},{"url":"bash","title":"Bash","tags":[],"sections":["Data Structures","Control Flow","Input / Output"]},{"url":"c","title":"C","tags":[],"sections":["Operations","Best practices"]},{"url":"cpp","title":"C++","tags":["cpp"],"sections":["Guidlines","Differences to C","C++ Standard Library","Popular 3rd Party Libraries"]},{"url":"css","title":"Cascading Style Sheets (CSS)","tags":[],"sections":["Box Model","Selectors","Properties","Units","Popular Frameworks","References"]},{"url":"doxygen","title":"DoxyGen","tags":[],"sections":["File header","Function annotations","Member Annotation"]},{"url":"go","title":"Go","tags":[],"sections":["Important Basics","Data Types","Control Flow","References"]},{"url":"language","title":"Language","tags":[],"sections":["Chomsky-Hierarchy","Backus–Naur Form (BNF)"]},{"url":"latex","title":"TeX and LaTeX","tags":[],"sections":["The Basics","Basic Document Formatting","Environments","References"]},{"url":"markdown","title":"Markdown","tags":[],"sections":["Basic Formatting","Level 2 Heading","Variants","References"]},{"url":"matlab","title":"Matlab","tags":[],"sections":[]},{"url":"natural-language","title":"Natural Language","tags":[],"sections":["Natural Language Processing"]},{"url":"python","title":"Python","tags":[],"sections":["Data Types","Operators","Classes"]},{"url":"regular-expressions","title":"Regular Expressions","tags":[],"sections":["Applet"]},{"url":"ruby","title":"Ruby","tags":[],"sections":["Important Basics","Data Types","Classes","Exceptions","References"]},{"url":"rust","title":"Rust","tags":[],"sections":["Important Basics","Types","Differences to common languages","References"]},{"url":"6lowpan","title":"6LoWPAN","tags":[],"sections":["Header Format","Compression Schemes","References"]},{"url":"coap","title":"Constrained Application Protocol (COAP)","tags":[],"sections":["Header Format:","Features","References"]},{"url":"dns","title":"Domain Name System (DNS)","tags":[],"sections":["Public DNS","Resource Record Format","Resource Record Types","Rules for setting up a DNS entry","Propagation Time","DNS Softwre","References"]},{"url":"ieee-802-15-04","title":"IEEE 802.15.4","tags":[],"sections":["Maximum Values","Superframe Structure","Device Types","Topologies","Physical Layer 1 (PHY)","Medium Access Layer 2 (MAC)","Link layer security","References"]},{"url":"ip","title":"Internet Protocol","tags":["address","IPv4","IPv6"],"sections":["IP-Address","Header Format","IP protocol numbers","References"]},{"url":"mqtt","title":"Message Queue Telemetry Transport (MQTT)","tags":[],"sections":["Features","Methods","Publish/Subscribe","Protocol","References"]},{"url":"network","title":"Network","tags":[],"sections":[]},{"url":"rpl","title":"RPL","tags":[],"sections":["Routing Requirements for LLN","DODAG","Mechanisms","References"]},{"url":"tcp","title":"TCP","tags":["port"],"sections":["Header Format","Ports","References"]},{"url":"udp","title":"UDP","tags":[],"sections":["Header Structure","References"]},{"url":"aes","title":"Advanced Encryption Standard (AES)","tags":[],"sections":["Algorithm","Modes of Operation","Test Vectors","References"]},{"url":"blake2","title":"Blake 2","tags":[],"sections":["Working Principle","Blake-2b","Test Vectors","References"]},{"url":"hash","title":"Hash Function","tags":[],"sections":["Properties","Cryptographic Hash Functions","Attributes","Algorithms","Attacks"]},{"url":"sha-2","title":"Secure Hash Algorithm 2 (SHA-2)","tags":[],"sections":["Working Principle","SHA2-256","Test Vectors","References"]},{"url":"sha-3","title":"Secure Hash Algorithm 3 (SHA-3)","tags":[],"sections":["Working Principle","References"]},{"url":"security","title":"Security","tags":["authentication","encryption","integrity"],"sections":["Security Goals","Security Threats","Security Mechanisms","Crypto Primitives"]},{"url":"datetime","title":"Date and Time","tags":[],"sections":["Datetime Notation","Measuring and Counting Time","Time Zones","Datetime Libraries","References"]},{"url":"float","title":"Floating Point Number","tags":[],"sections":["Special Numbers","Exceptions","Subnormal Numbers","Not-A-Number (NaN)","References"]},{"url":"numbers","title":"Number Converter","tags":[],"sections":["Memory Inspection","Data Types","2-Complement"]},{"url":"oop","title":"Object Oriented Programming (OOP)","tags":[],"sections":["Concepts","Likov Substitution Principle"]},{"url":"petri-net","title":"Petri Net","tags":[],"sections":["Types","Execution Rules","Properties","Context"]},{"url":"gdb","title":"Gnu Debugger (GDB)","tags":[],"sections":["Usage","Commands","References"]},{"url":"git","title":"Git","tags":[],"sections":["Terms","Creating and Cloning","Diagnose and Information","Commiting Changes","Repairing and Restoring"]},{"url":"tools","title":"Tools","tags":[],"sections":[]},{"url":"machines","title":"Machines","tags":[],"sections":[]},{"url":"quadcopter","title":"Quadcopter","tags":[],"sections":["Motors","Flight Control","References"]},{"url":"algebra","title":"Algebra","tags":[],"sections":[]},{"url":"bool","title":"Boolean Algebra","tags":[],"sections":[]},{"url":"complex-number","title":"Complex Numbers","tags":["Imaginary Unit"],"sections":["Rules"]},{"url":"exp-log","title":"Exponential and Logarithm","tags":[],"sections":["Exponential Function","Logarithm"]},{"url":"matrix","title":"Matrix","tags":[],"sections":["Calculations","Quadratic Matrices","Special 2×2 Matrices"]},{"url":"vector","title":"Vector Space","tags":[],"sections":[]},{"url":"analysis","title":"Analysis","tags":[],"sections":["Functions","Funktionen $f:\mathbb D \rightarrow \mathbb W,\ x \mapsto f(x)$","Asymptoten und Grenzwerte von $f$"]},{"url":"convolution","title":"Convolution","tags":["Faltung"],"sections":["Properties","Refrences"]},{"url":"curve","title":"Curve","tags":["line kurve"],"sections":["Properties","Special points","Bogenlänge"]},{"url":"differential-equation","title":"Differential Equation","tags":[],"sections":["Differential Equation of n-th Order","Lösen von homogenen DGLs 2. Ordnung","Lösung für inhomogene DGL"]},{"url":"differential-operators","title":"Differential Operators","tags":["gradient","rotation","divergence","laplace"],"sections":["Gradient","Rotation","Divergenz","Laplace","References"]},{"url":"frequency-analysis","title":"Frequency Analysis","tags":[],"sections":["Fourierreihe","Fouriertransformation (FT)","Laplaceransformation (LT) $\cx s = \alpha + \omega\i$","Z-Transform (ZT)"]},{"url":"integral","title":"Integral","tags":[],"sections":["Common Integrals","Trigonometry","Line Integrals","Surface Integrals","Integral Rules"]},{"url":"series","title":"Series","tags":["sum mean"],"sections":["Arithmetic Sum","Geometric Sum","Exponential row","Taylorpolynom","Taylor series"]},{"url":"geometry","title":"Geometry","tags":["strahlensatz"],"sections":["Intercept Theorem"]},{"url":"trigonometry","title":"Trigonometry","tags":["Sinus","Cosinus","Tangens","Arctan"],"sections":["Unit Circle","Sin, Cos, Tan","Hyperboles sinh, cosh, tanh","Cardinal Sinus"]},{"url":"math","title":"Math","tags":[],"sections":[]},{"url":"combinatoric","title":"Combinatorics","tags":["permutation","combination","variation"],"sections":["Scenarios"]},{"url":"moment","title":"Moment","tags":[],"sections":["Mean ($n = 1$)","Variance ($n = 2$)","Central Moments Comparison"]},{"url":"binomial-distribution","title":"Binomial Distribution","tags":[],"sections":["Probability Mass Function","References"]},{"url":"exponential-distribution","title":"Exponential Distribution","tags":[],"sections":["Probability Density Function","References"]},{"url":"negative-binomial-distribution","title":"Negative Binomial Distribution","tags":[],"sections":["Probability Mass Function","References"]},{"url":"normal-distribution","title":"Normal Distribution","tags":[],"sections":["Probability Density","Properties"]},{"url":"probability-distributions","title":"Probability Distributions","tags":[],"sections":["Urn Model","Distributions","References"]},{"url":"probability","title":"Probability Theory","tags":[],"sections":["Terms","Conditional Probabilty","Random Variables","Distribution"]},{"url":"statistics","title":"Statistics","tags":[],"sections":[]},{"url":"testing","title":"Hypothesis Testing","tags":[],"sections":["Parameters and Terms","Power of a test (1 − β)","Mean Tests"]},{"url":"constants","title":"Physical Constants","tags":[],"sections":[]},{"url":"electric-field","title":"Electric Field","tags":[],"sections":["Coulomb's law"]},{"url":"electromagnetism","title":"Electromagnetism","tags":[],"sections":[]},{"url":"kirchhoff","title":"Kirchhoffs's Circuit Laws","tags":[],"sections":["Kirchhoff's current law (KCL)","Kirchhoff's voltage law (KVL)"]},{"url":"maxwell","title":"Maxwell Equations","tags":[],"sections":["Gauss's law"]},{"url":"mechanics","title":"Mechanics","tags":[],"sections":["Classical Mechanics"]},{"url":"motion","title":"Mechanical Motion","tags":["Rotation","Translation"],"sections":["Newton's Laws of Motion","Classical Mechanics"]},{"url":"optic","title":"Optics","tags":[],"sections":[]},{"url":"reflection","title":"Reflection and Refraction","tags":[],"sections":[]},{"url":"physics","title":"Physics","tags":[],"sections":[]},{"url":"rounding","title":"Rounding","tags":[],"sections":["Exact and Approximate Numbers","Resolution, Accuracy, Precision","Significant Figures and Decimal Places","Calculate with rounded numbers","Scientific Notation of Numbers","Numerical Calculation (Floats)","References"]},{"url":"si-units","title":"SI Units","tags":[],"sections":["Derived Quantities","Prefix"]},{"url":"thermodynamics","title":"Thermodynamics","tags":[],"sections":["Laws of Thermodynamics"]}]

const options = {
  keys: ['title', 'tags'] // ,
  // id: ['url', 'title']
}
const fuse = new Fuse(search_index, options)

// dynamically load search index
// ====================================================================

// $.getJSON("/assets/js/search_index.json", function(data) {
//     console.log(data);
//     // data is a JavaScript object now. Handle it as such

//     search_index = data;
//     fuse = new Fuse(search_index, options);

// });

const autocomplete = function (options) {
  // console.log(JSON.stringify(options.data));
  for (let idx = 0; idx < options.container.length; idx++) {
    var doc = document
    const { data } = options
    var contEl = options.container[idx]
    var resultNodes = contEl.getElementsByTagName('A')
    var inputEl = options.container[idx].firstElementChild
    var cache = {}
    var handlers = {
      enter (e) {
        if (e.target.nextElementSibling.firstChild && e.target.nextElementSibling.firstChild.style.display != 'none') {
          window.location = e.target.nextElementSibling.firstChild.href
        } else if (e.target.parentNode === contEl && resultNodes[0].style.display == 'none') {
          // todo: deal with no results
          window.location = './404.html'
        }
      },
      up (e) {
        e.preventDefault()
        if (e.target.previousElementSibling && e.target.previousElementSibling.hasAttribute('href')) {
          e.target.previousElementSibling.focus()
        } else if (!e.target.previousElementSibling && e.target.parentNode === contEl.lastElementChild) {
          contEl.children[0].focus()
        }
      },
      down (e) {
        e.preventDefault()
        if (e.target === contEl.children[0]) {
          contEl.lastElementChild.children[0].focus()
        } else if (e.target.nextElementSibling && e.target.nextElementSibling.hasAttribute('href')) {
          e.target.nextElementSibling.focus()
        }
      },
      input (e) {
        const val = e.target.value.trim().replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
        return val ? insert(cacheFn(val, check)) : insert()
      },
      escape (e) {
        inputEl.value = ''
        insert()
        // contEl.firstElementChild.blur(); // should we unfocus?
      }
    }

    function createDropdown () {
      const wrapEl = contEl.querySelectorAll('.ac-results-wrapper')[0]
      let i = options.numResults
      while (i--) {
        const anchorEl = document.createElement('a')
        anchorEl.href = '#'
        anchorEl.innerHTML = 'a<i>i</i>'
        wrapEl.appendChild(anchorEl)
      }
    }

    function cacheFn (q, fn) {
      return cache[q] ? cache[q] : cache[q] = fn(q), cache[q]
    }

    function check (q) { // fuse part
      const entries = fuse.search(q)
      const arr = []
      for (let i = 0; (i < entries.length && i < options.numResults); i++) {
        arr.push({
          name: entries[i].url,
          tag: entries[i].title
        })
      }
      return arr
    }

    function insert (d) {
      let i = options.numResults
      while (i--) {
        if (d && d[i]) {
          resultNodes[i].style.display = 'block'
          resultNodes[i].firstChild.nodeValue = d[i].tag
          const uri = d[i].name.toLowerCase()
          resultNodes[i].href = `${options.directPath}/${uri}` // + '.html';
          resultNodes[i].firstElementChild.firstChild.nodeValue = ''
        } else if (!d || !d[i]) {
          resultNodes[i].style.display = 'none'
        }
      }
    }

    function multiHandler (e) {
      const k = e.keyCode
      // assign a value to k if the up, down enter keys are pressed, or if the event is an input
      const meth = k === 13 ? 'enter' : k === 27 ? 'escape' : k === 38 ? 'up' : k === 40 ? 'down' : e.type === 'input' ? 'input' : null
      // if 'meth' was assigned a value earlier, return the associated function and pass the event to it
      return meth ? handlers[meth](e) : null
    }

    function changeHandler (e) {
      window.setTimeout(() => (doc.activeElement.parentNode === contEl || doc.activeElement.parentNode === contEl.lastElementChild ? null : insert()), 50)
    }

    function globalHandler (e) {
      const { keyCode } = e
      if (keyCode == 9) {
        if (e.target != contEl.children[0]) {
          window.setTimeout(() => { contEl.children[0].focus() }, 0)
          contEl.children[0].focus()
        }
      }
    }

    createDropdown()
    document.addEventListener('keydown', globalHandler)
    contEl.addEventListener('input', multiHandler)
    contEl.addEventListener('keydown', multiHandler)
    contEl.parentNode.addEventListener('submit', (e) => { event.returnValue = false; return false }) // for the form
    contEl.firstElementChild.addEventListener('change', changeHandler)
  }
}
