import BulletPointList from "./BulletPointList";
import FunctionButtonList from "./FunctionButtonList";
import TextContent from "./TextContent";

function MainSection() {
  return (
    <main>
      <div className="section-header">
        <h1 className="section-header__title">Nagłówek H1</h1>
      </div>
      <section className="section">
        <div className="bullet-point-box">
          <BulletPointList />
        </div>
        <div className="function-button-box">
          <FunctionButtonList />
        </div>
        <div className="text-content-box">
          <TextContent />
        </div>
      </section>
    </main>
  );
}

export default MainSection;
