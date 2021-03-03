import React from "react";
import ServiceCard from "./ServiceCard";

class ServicesPage extends React.Component {
  state = { selectedVideo: null };

  renderCards() {
    return (
      <div className="ui link cards">
        <ServiceCard name="Wedding Space" description="Rent space." />
        <ServiceCard name="Community Meeting Space" description="Rent space." />
        <ServiceCard name="Funeral Space" description="Rent space." />
        <ServiceCard
          name="Equipment Rentai"
          description="Rent our professional equipment for your event."
        />
        <ServiceCard
          name="Catering Service"
          description="Let our professionals cater your event."
        />
        <ServiceCard name="Spanish Class" description="Learn a new language." />
        <ServiceCard
          name="Arts and Crats Class"
          description="Learn arts and craft."
        />
        <ServiceCard name="Painting Class" description="Learn how to paint." />
        <ServiceCard
          name="Elderly and Handicapped home care"
          description="Let our professionals care for you in the comfort of your own home."
        />
        <ServiceCard
          name="Shuttle Service"
          description="Community Transportation."
        />
      </div>
    );
  }
  render() {
    return this.renderCards();
  }
}

export default ServicesPage;
