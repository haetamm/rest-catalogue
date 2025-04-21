import React from 'react';
import { FooterWrapper, FooterList, FooterItem } from './styled/Footer';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterList>
        <FooterItem>
          <span>Copyright © 2020 - Nongki&apos;s</span>
        </FooterItem>
        <FooterItem>
          <span>
            handcrafted with <i title="love" className="fa fa-heart"></i> by
            firmanjabar
          </span>
        </FooterItem>
      </FooterList>
    </FooterWrapper>
  );
}
