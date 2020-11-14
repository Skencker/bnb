import React from "react";
import ButtonRecherche from "./ButtonRecherche";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-text">
      <h1>Find hébergements in France on Airbnb</h1>
      <p>
        Découvrez des chambres privées ou des logements entiers, parfaitement
        adaptés à tout type de voyage.
      </p>
      <form className="form" action="">
        <div className="form-adress">
          <label for="">
            <div className="label label-address"> ADRESSE </div>
            <input className="input input-address" type="text" value="France" />
          </label>
        </div>
        <div className="form-arrive">
          <label for="">
            <div className="label label-arrive"> ARRIVEE </div>
            <input className="input input-arrive" type="text" value="Ajoutez une date" />
          </label>
          <label for="">
            <div className="label label-depart"> DEPART </div>
            <input className="input input-depart" type="text" value="Ajoutez une date" />
          </label>
        </div>
      
        <div className="form-adulte">
          <label for="">
            <div className="label label-adulte"> ADULTES </div>
            <input className="input input-adulte" type="text" value="2" />
          </label>
          <label for="">
            <div className="label label-enfant"> ENFANTS </div>
            <input className="input input-enfant" type="text" value="0" />
          </label>
        </div>
      </form>

      <ButtonRecherche />
    </div>
  );
};

export default Form;
