import './styles/main.scss';

function App() {
  return (
		<div>
      <div className="card">
        <h3>How much time are you planning on staying in the city?</h3>
        <p>More time brings more discount on the tickets.</p>
        <input type="number" name="q1"/>
      </div>
      <div className="card">
        <h3>Are you a student?</h3>
        <p>You can benefit from reduced ticket prices with your Student ID Card.</p>
        <label for="q2_a1">Yes</label>
        <input type="radio" name="q2_a1"/>
        <label for="q2_a2">No</label>
        <input type="radio" name="q2_a2"/>
      </div>
      <div className="card">
        <h3>Do you have a bicycle?</h3>
        <p>There are additional costs on tickets if you carry your bike with you in public transport.</p>
        <label for="q2_a1">Yes</label>
        <input type="radio" name="q2_a1"/>
        <label for="q2_a2">No</label>
        <input type="radio" name="q2_a2"/>
      </div>
      <div className="card">
        <h3>Please select the zones you want to travel in Berlin</h3>
        <p>Berlin is divided into three tariff zones: AB, BC und ABC. Tariff zone AB includes the urban area to the city boundary. Zone ABC additionally includes Berlin's surrounding area and Potsdam Hauptbahnhof.</p>
        <label for="q2_a1">Yes</label>
        <input type="radio" name="q2_a1"/>
        <label for="q2_a2">No</label>
        <input type="radio" name="q2_a2"/>
      </div>
    </div>
  );
}

export default App;
