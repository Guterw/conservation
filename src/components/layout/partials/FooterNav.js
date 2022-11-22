import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="https://github.com/guterw">Contato</Link>
        </li>
        <li>
          <Link href="https://www.gov.br/mcti/pt-br">MCTI</Link>
        </li>
        <li>
          <Link to="https://softex.br/a-softex/">Softex</Link>
        </li>
        <li>
          <Link to="https://api.whatsapp.com/send/?phone=551540096537">Suporte</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;