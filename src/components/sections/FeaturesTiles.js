import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Confira nossas Trilhas:',
    paragraph: 'Trilhas totalmente gratuitas e abertas a sociedade, se inscreva já!'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={80}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Inteligência Artificial
                    </h4>
                  <p className="m-0 text-sm">
                  Trilha Starter de Inteligência Artificial objetiva introduzir o aluno nos conceitos de IA aplicada à solução de problemas através de aulas ao vivo com instrutores experientes do FIT e com atividades online para evolução rápida do aluno. (Iniciativa do Ministério da Ciência, Tecnologia e Inovações, com recursos da Lei nº 8.248, de 23 de outubro de 1991)                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Robótica para Humanóides com Ênfase em IA e Automação
                    </h4>
                  <p className="m-0 text-sm">
                  Trilha Starter de Robótica para Humanóides com ênfase em IA e Automação objetiva introduzir o aluno nos conceitos de robótica aplicada à solução de problemas reais através de aulas ao vivo com instrutores experientes do FIT e com atividades online para evolução rápida do aluno. (Iniciativa do Ministério da Ciência, Tecnologia e Inovações, com recursos da Lei nº 8.248, de 23 de outubro de 1991)                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Redes de Comunicação IoT
                    </h4>
                  <p className="m-0 text-sm">
                  A trilha Starter de Redes de Comunicação IoT objetiva introduzir o aluno nos conceitos de IoT aplicada à solução de problemas reais através de aulas ao vivo com instrutores experientes do FIT e com atividades online para evolução rápida do aluno. (Iniciativa do Ministério da Ciência, Tecnologia e Inovações, com recursos da Lei nº 8.248, de 23 de outubro de 1991)                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Programação de Software Embarcado em IoT
                    </h4>
                  <p className="m-0 text-sm">
                  A trilha Starter de Programação de Software Embarcado em IoT objetiva introduzir o aluno nos conceitos de IoT aplicada à solução de problemas reais através de aulas ao vivo com instrutores experientes do FIT e com atividades online para evolução rápida do aluno. (Iniciativa do Ministério da Ciência, Tecnologia e Inovações, com recursos da Lei nº 8.248, de 23 de outubro de 1991)                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Desenvolvimento de Sistemas para Redes IoT
                    </h4>
                  <p className="m-0 text-sm">
                  Trilha Starter de Desenvolvimento de Sistemas para redes IoT objetiva introduzir o aluno nos conceitos de IoT aplicada à solução de problemas reais através de aulas ao vivo com instrutores experientes do FIT e com atividades online para evolução rápida do aluno. (Iniciativa do Ministério da Ciência, Tecnologia e Inovações, com recursos da Lei nº 8.248, de 23 de outubro de 1991)                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Simulação de Fábrica - Gêmeos Digitais
                    </h4>
                  <p className="m-0 text-sm">
                  A trilha Starter de Simulação Digital de Fábrica - Gêmeos Digitais objetiva introduzir o aluno nos conceitos de simulação aplicada à solução de problemas reais através de aulas ao vivo com instrutores experientes do FIT e com atividades online para evolução rápida do aluno. (Iniciativa do Ministério da Ciência, Tecnologia e Inovações, com recursos da Lei nº 8.248, de 23 de outubro de 1991)                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;