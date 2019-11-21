import React from 'react';
import './App.css';

interface IProps {}
interface IState {
  prevScrollpos: any;
  // visible: boolean;
}

export default class App extends React.Component<IProps, IState> {
  state = {
    prevScrollpos: window.pageYOffset,
    // visible: true
  };

  private header = React.createRef<HTMLDivElement>();
  private body = React.createRef<HTMLDivElement>();
  private filter = React.createRef<HTMLDivElement>();

  public componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  public componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  private handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollpos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollpos;

    this.setState({
      prevScrollpos: currentScrollpos,
    });

    if (prevScrollpos > 0) {
      if (visible) {
        this.header.current!.classList.remove('headerup');
        this.filter.current!.classList.remove('filterdown');
      }
      else {
        this.header.current!.classList.add('headerup');
        this.filter.current!.classList.add('filterdown');
      }
    }
  };

  public render() {
    return (
      <div className={'App'}>
        <div className={'header'} ref={this.header}>
          HEADER
        </div>
        <div className={'body'} ref={this.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
          hendrerit mi. Proin egestas vitae lacus a tempus. Vivamus ante est,
          elementum placerat nisl faucibus, vulputate tempor felis. Suspendisse
          eu diam mattis, ultrices nisi a, tincidunt enim. Duis viverra aliquam
          arcu et blandit. Etiam tempor elementum erat vel condimentum. Etiam
          rutrum felis ut tincidunt ultricies. Aenean non arcu vestibulum,
          tincidunt lectus ac, faucibus tellus. Praesent quis dui cursus, tempus
          purus vel, sollicitudin tellus. Fusce vehicula ultricies lectus
          bibendum rutrum. Nam sagittis varius dui, a porta massa placerat id.
          Pellentesque enim augue, suscipit eu egestas et, mollis et tortor.
          Vivamus sed convallis felis, id efficitur risus. In hendrerit
          porttitor nibh, eget pharetra orci. Donec quis odio sit amet nulla
          posuere sagittis at eu ex. Pellentesque finibus nibh a tortor
          malesuada lobortis a ac enim. Sed non velit turpis. Pellentesque
          tristique odio quis nunc eleifend feugiat. Nunc tincidunt magna nec
          nisi auctor ornare. Sed vehicula urna quis massa luctus, ut imperdiet
          arcu tempor. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Phasellus ut leo velit. Phasellus
          congue vestibulum felis eu congue. Ut elementum suscipit est, vel
          luctus sem hendrerit ut. Aliquam id ultricies erat, ut euismod neque.
          Phasellus eleifend auctor justo, at egestas nisi pulvinar sed. Nunc
          mattis auctor enim non eleifend. Duis tincidunt bibendum leo at
          dictum. Nam metus sapien, tincidunt ut elit finibus, ultrices
          tincidunt lacus. Donec eu molestie ex. Curabitur ac turpis ac urna
          ultricies commodo. Nunc condimentum erat facilisis bibendum faucibus.
          Proin porttitor tristique arcu, posuere efficitur sem aliquam in.
          Vestibulum elementum lorem in arcu blandit cursus. Suspendisse
          potenti. Sed iaculis accumsan dui, at lacinia justo blandit et. Aenean
          euismod iaculis nulla eu vehicula. Sed rutrum tortor eu leo finibus,
          vitae efficitur leo auctor. Vivamus eget turpis ipsum. Suspendisse
          blandit pretium urna vel porttitor. Vivamus justo lectus, sollicitudin
          sed felis nec, tincidunt fermentum nibh. Ut eget accumsan turpis, quis
          finibus neque. Phasellus a nunc blandit, eleifend ante at, iaculis
          ligula. Etiam nec neque efficitur, lacinia est sit amet, feugiat
          lorem. Curabitur finibus dui ut interdum tincidunt. In tempus ante non
          nisi mattis lacinia. Donec sit amet efficitur velit. Proin ut massa a
          mauris faucibus vestibulum ut quis purus. Sed id felis sagittis,
          sagittis nulla cursus, sodales justo. Vestibulum lobortis fringilla
          accumsan. Nulla facilisi. Morbi pretium ante id libero facilisis
          accumsan. Donec non neque in purus laoreet porta vel in nisi.
          Vestibulum blandit scelerisque arcu cursus bibendum. Mauris ultricies
          odio non tortor posuere, non mattis eros fringilla. Donec tincidunt
          nunc vitae lorem semper sodales. Nunc neque augue, feugiat eu odio
          quis, efficitur porttitor eros. Fusce sagittis molestie bibendum.
          Nullam gravida nunc sit amet luctus ornare. Donec sem massa, auctor ac
          malesuada vel, elementum ut arcu. Cras vel metus dui. Duis eget
          pharetra nisi. Fusce orci nisl, dignissim in viverra id, mollis sed
          enim. Nulla congue nunc vel magna aliquam, non tempor diam vulputate.
          Suspendisse eget urna lorem. Nulla orci lectus, elementum nec odio
          vel, malesuada dapibus nibh. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam non hendrerit mi. Proin egestas vitae lacus a
          tempus. Vivamus ante est, elementum placerat nisl faucibus, vulputate
          tempor felis. Suspendisse eu diam mattis, ultrices nisi a, tincidunt
          enim. Duis viverra aliquam arcu et blandit. Etiam tempor elementum
          erat vel condimentum. Etiam rutrum felis ut tincidunt ultricies.
          Aenean non arcu vestibulum, tincidunt lectus ac, faucibus tellus.
          Praesent quis dui cursus, tempus purus vel, sollicitudin tellus. Fusce
          vehicula ultricies lectus bibendum rutrum. Nam sagittis varius dui, a
          porta massa placerat id. Pellentesque enim augue, suscipit eu egestas
          et, mollis et tortor. Vivamus sed convallis felis, id efficitur risus.
          In hendrerit porttitor nibh, eget pharetra orci. Donec quis odio sit
          amet nulla posuere sagittis at eu ex. Pellentesque finibus nibh a
          tortor malesuada lobortis a ac enim. Sed non velit turpis.
          Pellentesque tristique odio quis nunc eleifend feugiat. Nunc tincidunt
          magna nec nisi auctor ornare. Sed vehicula urna quis massa luctus, ut
          imperdiet arcu tempor. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Phasellus ut leo velit.
          Phasellus congue vestibulum felis eu congue. Ut elementum suscipit
          est, vel luctus sem hendrerit ut. Aliquam id ultricies erat, ut
          euismod neque. Phasellus eleifend auctor justo, at egestas nisi
          pulvinar sed. Nunc mattis auctor enim non eleifend. Duis tincidunt
          bibendum leo at dictum. Nam metus sapien, tincidunt ut elit finibus,
          ultrices tincidunt lacus. Donec eu molestie ex. Curabitur ac turpis ac
          urna ultricies commodo. Nunc condimentum erat facilisis bibendum
          faucibus. Proin porttitor tristique arcu, posuere efficitur sem
          aliquam in. Vestibulum elementum lorem in arcu blandit cursus.
          Suspendisse potenti. Sed iaculis accumsan dui, at lacinia justo
          blandit et. Aenean euismod iaculis nulla eu vehicula. Sed rutrum
          tortor eu leo finibus, vitae efficitur leo auctor. Vivamus eget turpis
          ipsum. Suspendisse blandit pretium urna vel porttitor. Vivamus justo
          lectus, sollicitudin sed felis nec, tincidunt fermentum nibh. Ut eget
          accumsan turpis, quis finibus neque. Phasellus a nunc blandit,
          eleifend ante at, iaculis ligula. Etiam nec neque efficitur, lacinia
          est sit amet, feugiat lorem. Curabitur finibus dui ut interdum
          tincidunt. In tempus ante non nisi mattis lacinia. Donec sit amet
          efficitur velit. Proin ut massa a mauris faucibus vestibulum ut quis
          purus. Sed id felis sagittis, sagittis nulla cursus, sodales justo.
          Vestibulum lobortis fringilla accumsan. Nulla facilisi. Morbi pretium
          ante id libero facilisis accumsan. Donec non neque in purus laoreet
          porta vel in nisi. Vestibulum blandit scelerisque arcu cursus
          bibendum. Mauris ultricies odio non tortor posuere, non mattis eros
          fringilla. Donec tincidunt nunc vitae lorem semper sodales. Nunc neque
          augue, feugiat eu odio quis, efficitur porttitor eros. Fusce sagittis
          molestie bibendum. Nullam gravida nunc sit amet luctus ornare. Donec
          sem massa, auctor ac malesuada vel, elementum ut arcu. Cras vel metus
          dui. Duis eget pharetra nisi. Fusce orci nisl, dignissim in viverra
          id, mollis sed enim. Nulla congue nunc vel magna aliquam, non tempor
          diam vulputate. Suspendisse eget urna lorem. Nulla orci lectus,
          elementum nec odio vel, malesuada dapibus nibh.
        </div>
        <div className={'filter'} ref={this.filter}>
          filter
        </div>
      </div>
    );
  }
}
