import React from "react";

export default function About(props) {

  // let myStyle = {
  //   color: props.mode === 'dark'? 'white' : 'black',
  //   backgroundColor: props.mode === 'dark'? 'black': white
  // } 

  return (
    <div
      className="container"
      style={{ color: props.mode === "light" ? "black" : "white" }}
    >
      <h1 className="my-3">About TextUtils</h1>
      <div
        className="accordion"
        id="accordionExample"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div
          className="accordion-item"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "light" ? "white" : "black",
              }}
            >
              <strong>Accordion 1: TextUtils App Overview</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "light" ? "white" : "#260d45",
              }}
            >
              <p>
                <strong>TextUtils </strong>is a simple web application built
                using ReactJS that allows users to manipulate text input in
                various ways. The application includes a user-friendly interface
                with multiple buttons that allow the user to convert text to
                uppercase, lowercase, and title case, as well as count the
                number of words and characters in the input text. Users can also
                preview the text and copy it to the clipboard with the click of
                a button. Overall, TextUtils is a powerful tool that makes
                working with text quick and easy.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "light" ? "white" : "#2c052d",
              }}
            >
              <strong>Accordion 2: Features</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "light" ? "white" : "#260d45",
              }}
            >
              <p>
                <strong>
                  TextUtils has several features that make it stand out from
                  other text manipulation tools. Some of these features include:
                </strong>
              </p>
              <li>
                Uppercase and lowercase conversion: Users can quickly convert
                text to uppercase or lowercase, depending on their needs.
              </li>
              <li>
                Title case conversion: TextUtils can also convert text to title
                case, which capitalizes the first letter of each word in the
                input text.
              </li>
              <li>
                Word and character count: Users can quickly determine the number
                of words and characters in their input text.
              </li>
              <li>
                Preview: TextUtils provides a preview of the input text, so
                users can see what the manipulated text will look like before
                copying it to the clipboard.
              </li>
              <li>
                Copy to clipboard: TextUtils allows users to quickly copy their
                manipulated text to the clipboard, making it easy to use in
                other applications.
              </li>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "light" ? "white" : "#060329",
              }}
            >
              <strong>Accordion 3: Future Plans</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "light" ? "white" : "#260d45",
              }}
            >
              <p>
                <strong>
                  While TextUtils is already a powerful tool, there are several
                  features that we plan to add in the future. Some of these
                  features include:
                </strong>
              </p>
              <li>
                Spell check: TextUtils will include a spell-checking feature
                that will highlight any misspelled words in the input text.
              </li>
              <li>
                Language detection: TextUtils will be able to detect the
                language of the input text and provide language-specific
                manipulation options.
              </li>
              <li>
                Customizable themes: Users will be able to customize the look
                and feel of TextUtils to match their personal preferences.
              </li>
              <li>
                Integration with other applications: TextUtils will be able to
                integrate with other applications, such as email clients and
                social media platforms, to make it easier to use the manipulated
                text in other contexts.
              </li>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
            </div> */}
    </div>
  );
}
