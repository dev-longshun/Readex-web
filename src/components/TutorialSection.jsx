const TutorialSection = ({ title, children }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}

export default TutorialSection
