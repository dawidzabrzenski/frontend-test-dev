import BulletPointList from "./BulletPointList";
import FunctionButtonsList from "./FunctionButtonList";
import TextContent from "./TextContent";

function MainSection() {
  return (
    <main>
      <div className="section-header">
        <h className="section-header__title">Nagłówek H1</h>
      </div>
      <section className="section">
        <div>
          <BulletPointList />
        </div>
        <div>
          <FunctionButtonsList />
        </div>
        <div className="text-content-box">
          <TextContent />
        </div>
      </section>
    </main>
  );
}

export default MainSection;
