import React from 'react';
import NavbarACP from '../components/NavbarACP';
import TableACP from '../components/TableACP';
function ACP(){
    return(
        <><NavbarACP />
        <h1 style={{ fontSize: '3rem', textAlign: 'center',color: '(var(--n)'}}>Our Store</h1><div className="px-8 py-4">
            <TableACP />
        </div></>
    )
}
export default ACP;