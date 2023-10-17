import ServiceCard from "@/components/ui/ServiceCard/ServiceCard";

function Services() {
  return (
    <section className="services-container">
      <div className="service-banner">
        <div className="service-banner-content container">
          <div>
            <h1>SERVICES</h1>
            <div className="d-flex align-items-end">
              <span></span>
              <p>SPECIALIZING IN HOME CONSTRUCTION</p>
            </div>
          </div>
        </div>
      </div>

      <ServiceCard />
    </section>
  );
}

export default Services;
