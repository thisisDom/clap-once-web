const rapidClient = Rapid.createClient('NDA1OWE0MWo1b3AzOThmLnJhcGlkLmlv');
rapidClient.authorize('4059a41j5op398e');
const coVictims = rapidClient.collection('clap-once');

class Incident extends React.Component {
  constructor(props){
    super(props);
  }

  renderVictims(){
    if (!this.props.victims){
      return false;
    }
    let victims = this.props.victims.map((victim) => this.renderVictim(victim));
    return (
      <div className="incident-victims">
        {victims}
      </div>
    )
  }

  renderVictim(victim){

    return (
      <div key={victim.id} className="victim-wrapper">
        <Victim id={victim.id} name={victim.name} incident_id={this.props.id} />
      </div>
    )
  }

  render() {
    return (
      <div className="incident-container">
        <div data-incident-type={this.props.type} className="incident-info">
        <div className="incident-header">
          <div className="incident-type">{this.props.type}</div>
          <div className="incident-victim-count">({this.props.victimCount} affected)</div>

          </div>
          <div className="incident-desc">{this.props.desc}</div>

        </div>
        {this.renderVictims()}
      </div>
    );
  }
}
