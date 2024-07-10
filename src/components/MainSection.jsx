import BulletPointList from "./BulletPointList";

function MainSection() {
  return (
    <main>
      <div className="section-header">
        <h className="section-header__title">Nagłówek H1</h>
      </div>
      <section className="section">
        <div className="section__element">
          <BulletPointList />
        </div>
        <div className="s2">2</div>
        <div className="s3">3</div>
      </section>
    </main>
  );
}

export default MainSection;
