import Card from "../Card/Card";
import "./Experience.css";

export default function Experience(params) {
  return (
    <div className="experience" id='experience'>
      <div className="project">
        <span>My Projects</span>
      </div>
      <div className="proj-card">

        <div className="first">
          <Card heading="Billing System" detail="This is billing and inventory management system developed in java" link='https://github.com/vandan-savla/billing_and_inventory_manangement_system'>
          </Card>
        </div>
        <div className="second">
          <Card heading="Weather App" detail="This project is made using python.Gui using tkinter and data is fetched from openweather api" link='https://github.com/vandan-savla/weather-app-in-python-tkinter'>
          </Card>
        </div>
        <div className="third">
          <Card heading="Text Modifiyer" detail="This is simple django webapp that modifies text according to your need " link="https://github.com/vandan-savla/Text-Modifier/tree/main/textanalyzer">
          </Card>
        </div>
        
      </div>
    </div>
  )
}