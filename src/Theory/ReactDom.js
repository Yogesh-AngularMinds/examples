import React from "react";

function ReactDom() {
  return (
    <div className="p-5">
      <div class="text">
        <p>
          <strong>What is DOM?</strong>&nbsp;
        </p>
        <div id="GFG_AD_gfg_mobile_336x280"></div>
        <p>
          DOM, abbreviated as Document Object Model, is a World Wide Web
          Consortium standard logical representation of any webpage. In easier
          words, DOM is a tree-like structure that contains all the elements and
          it’s properties of a website as its nodes. DOM provides a
          language-neutral interface that allows accessing and updating of the
          content of any element of a webpage.&nbsp;
        </p>
        <p>
          Before React, Developers directly manipulated the DOM elements which
          resulted in frequent DOM manipulation, and each time an update was
          made the browser had to recalculate and repaint the whole view
          according to the particular CSS of the page, which made the total
          process to consume a lot of time. As a betterment, React brought into
          the scene the virtual DOM. The <strong>Virtual DOM</strong> can be
          referred to as a copy of the actual DOM representation that is used to
          hold the updates made by the user and finally reflect it over to the
          original Browser DOM at once consuming much lesser time.&nbsp;
        </p>
        <p>
          <strong>What is ReactDOM?</strong>&nbsp;
        </p>
        <p>
          ReactDOM is a package that provides DOM specific methods that can be
          used at the top level of a web app to enable an efficient way of
          managing DOM elements of the web page. ReactDOM provides the
          developers with an API containing the following methods and a few
          more.&nbsp;
        </p>
        <ul>
          <li>render()</li>
          <li>findDOMNode()</li>
          <li>unmountComponentAtNode()</li>
          <li>hydrate()</li>
          <li>createPortal()</li>
        </ul>
        <p>
          <strong>Pre-requisite:</strong> To use the ReactDOM in any React web
          app we must first import ReactDOM from the react-dom package by using
          the following code snippet:&nbsp;&nbsp;
        </p>
        <div
          id="GFG_AD_Desktop_InContent_ATF_336x280"
          style={{ textAlign: "center" }}
        ></div>
        <pre>import ReactDOM from 'react-dom'</pre>
        <p style={{ textAlign: "center" }}>
          <strong>render() Function</strong>
        </p>
        <p>
          This is one of the most important methods of ReactDOM. This function
          is used to render a single React Component or several Components
          wrapped together in a Component or a div element. This function uses
          the efficient methods of React for updating the DOM by being able to
          change only a subtree, efficient diff methods, etc.&nbsp;
        </p>
        <p>
          <strong>Syntax</strong>:&nbsp;
        </p>
        <pre>ReactDOM.render(element, container, callback)</pre>
        <p>
          <strong>Parameters</strong>: This method can take a maximum of three
          parameters as described below.&nbsp;&nbsp;
        </p>
        <ul>
          <li>
            <strong>element:</strong> This parameter expects a JSX expression or
            a React Element to be rendered.
          </li>
          <li>
            <strong>container:</strong> This parameter expects the container in
            which the element has to be rendered.
          </li>
          <li>
            <strong>callback:</strong> This is an optional parameter that
            expects a function that is to be executed once the render is
            complete.
          </li>
        </ul>
        <p>
          <strong>Return Type:</strong> This function returns a reference to the
          component or null if a stateless component was rendered.&nbsp;
          <br />
          &nbsp;
        </p>
        <p style={{ textAlign: "center" }}>
          <strong>findDOMNode() Function</strong>
        </p>
        <div
          style={{ textAlign: "center", margin: "20px 0" }}
          id="GFG_AD_gfg_outstream_incontent"
          data-google-query-id="CKi6kMO06v4CFbDecwEdoaMGpA"
        >
          <div
            id="google_ads_iframe_/27823234/gfg_outstream_incontent_0__container__"
            style={{
              border: "0pt none",
              display: "inline-block",
              width: "1px",
              height: "1px",
            }}
          >
            <iframe
              frameborder="0"
              src="https://c024b2a4a8ecab13212315c00a9a6253.safeframe.googlesyndication.com/safeframe/1-0-40/html/container.html"
              id="google_ads_iframe_/27823234/gfg_outstream_incontent_0"
              title="3rd party ad content"
              name=""
              scrolling="no"
              marginwidth="0"
              marginheight="0"
              width="1"
              height="1"
              data-is-safeframe="true"
              sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              role="region"
              aria-label="Advertisement"
              tabindex="0"
              data-google-container-id="3"
              style={{ border: "0px", verticalAlign: "bottom" }}
            ></iframe>
          </div>
        </div>
        <p>
          This function is generally used to get the DOM node where a particular
          React component was rendered. This method is very less used like the
          following can be done by adding a ref attribute to each component
          itself.&nbsp;
        </p>
        <p>
          <strong>Syntax</strong>:&nbsp;
        </p>
        <pre>ReactDOM.findDOMNode(component)</pre>
        <p>
          <strong>Parameters</strong>: This method takes a single parameter
          component that expects a React Component to be searched in the Browser
          DOM.&nbsp;
        </p>
        <p>
          <strong>Return Type:</strong> This function returns the DOM node where
          the component was rendered on success otherwise null.&nbsp;
          <br />
          &nbsp;
        </p>
        <p style={{ textAlign: "center" }}>
          <strong>unmountComponentAtNode() Function</strong>
        </p>
        <p>
          This function is used to unmount or remove the React Component that
          was rendered to a particular container. As an example, you may think
          of a notification component, after a brief amount of time it is better
          to remove the component making the web page more efficient.&nbsp;
        </p>
        <p>
          <strong>Syntax</strong>:&nbsp;&nbsp;
        </p>
        <pre>ReactDOM.unmountComponentAtNode(container)</pre>
        <p>
          <strong>Parameters</strong>: This method takes a single parameter
          container which expects the DOM container from which the React
          component has to be removed.&nbsp;
        </p>
        <p>
          <strong>Return Type:</strong> This function returns true on success
          otherwise false.&nbsp;
          <br />
          &nbsp;
        </p>
        <p style={{ textAlign: "center" }}>
          <strong>hydrate() Function</strong>
        </p>
        <div
          style={{ textAlign: "center", margin: "20px 0" }}
          id="GFG_AD_gfg_outstream_incontent"
        ></div>
        <p>
          This method is equivalent to the render() method but is implemented
          while using server-side rendering.&nbsp;
        </p>
        <p>
          <strong>Syntax</strong>:&nbsp;
        </p>
        <pre>ReactDOM.hydrate(element, container, callback)</pre>
        <p>
          <strong>Parameters</strong>: This method can take a maximum of three
          parameters as described below.&nbsp;
        </p>
        <ul>
          <li>
            <strong>element:</strong> This parameter expects a JSX expression or
            a React Component to be rendered.
          </li>
          <li>
            <strong>container:</strong> This parameter expects the container in
            which the element has to be rendered.
          </li>
          <li>
            <strong>callback:</strong> This is an optional parameter that
            expects a function that is to be executed once the render is
            complete.
          </li>
        </ul>
        <p>
          <strong>Return Type:</strong> This function attempts to attach event
          listeners to the existing markup and returns a reference to the
          component or null if a stateless component was rendered.&nbsp;
          <br />
          &nbsp;
        </p>
        <p style={{ textAlign: "center" }}>
          <strong>createPortal() Function</strong>
        </p>
        <p>
          Usually, when an element is returned from a component’s render method,
          it’s mounted on the DOM as a child of the nearest parent node which in
          some cases may not be desired. Portals allow us to render a component
          into a DOM node that resides outside the current DOM hierarchy of the
          parent component.&nbsp;
        </p>
        <p>
          <strong>Syntax</strong>:&nbsp;
        </p>
        <pre>ReactDOM.createPortal(child, container)</pre>
        <p>
          <strong>Parameters</strong>: This method takes two parameters as
          described below.&nbsp;&nbsp;
        </p>
        <ul>
          <li>
            <strong>child:</strong> This parameter expects a JSX expression or a
            React Component to be rendered.
          </li>
          <li>
            <strong>container:</strong> This parameter expects the container in
            which the element has to be rendered.
          </li>
        </ul>
        <p>
          <strong>Return Type:</strong> This function returns nothing.&nbsp;
          <br />
          &nbsp;
        </p>
        <p style={{ textAlign: "center" }}>
          <strong>Important Points to Note:</strong>
        </p>
        <ul>
          <li>
            ReactDOM.render() replaces the child of the given container if any.
            It uses a highly efficient diff algorithm and can modify any subtree
            of the DOM.
          </li>
          <li>
            findDOMNode() function can only be implemented upon mounted
            components thus Functional components can not be used in
            findDOMNode() method.
          </li>
          <li>
            ReactDOM uses observables thus provides an efficient way of DOM
            handling.
          </li>
          <li>ReactDOM can be used on both the client-side and server-side.</li>
        </ul>
      </div>
    </div>
  );
}

export default ReactDom;
