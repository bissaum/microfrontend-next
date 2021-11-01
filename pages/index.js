import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

import angularSvg from "../assets/angular.svg";
import jquerySvg from "../assets/jquery.svg";
import jsSvg from "../assets/js.svg";
import nextJsSvg from "../assets/nextjs.svg";
import reactSvg from "../assets/react.svg";
import vueSvg from "../assets/vue.svg";

export default function Home() {
  const [valor, setValor] = useState('NextJS');

  return (
    <>
      <Head>
        <title>NextJS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-auto">
            <Image height="32" src={angularSvg} />
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="inputAngular"
              className="form-control"
              aria-describedby="hintAngular"
            />
          </div>
          <div className="col-auto">
            <span id="hintAngular" className="form-text"> Angular </span>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-auto">
            <Image height="32" src={jquerySvg} />
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="inputJQuery"
              className="form-control"
              aria-describedby="hintJQuery"
            />
          </div>
          <div className="col-auto">
            <span id="hintJQuery" className="form-text"> jQuery </span>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-auto">
            <Image height="32" src={jsSvg} />
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="inputJS"
              className="form-control"
              aria-describedby="hintJS"
            />
          </div>
          <div className="col-auto">
            <span id="hintJS" className="form-text"> JS </span>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-auto">
            <Image height="32" src={nextJsSvg} />
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="inputNextJS"
              className="form-control"
              aria-describedby="hintNextJS"
              onChange={(e) => setValor(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <span id="hintNextJS" className="form-text"> {valor} </span>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-auto">
            <Image height="32" src={reactSvg} />
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="inputReact"
              className="form-control"
              aria-describedby="hintReact"
            />
          </div>
          <div className="col-auto">
            <span id="hintReact" className="form-text"> React </span>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-auto">
            <Image height="32" src={vueSvg} />
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="inputVue"
              className="form-control"
              aria-describedby="hintVue"
            />
          </div>
          <div className="col-auto">
            <span id="hintVue" className="form-text"> Vue </span>
          </div>
        </div>
      </div>
    </>
  );
}
