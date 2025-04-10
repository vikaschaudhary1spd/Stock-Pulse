import React from 'react';

function CreateTicket() {
    return (  
        <div className="container">
      <div className="row p-5 mt-5">
        <h3 className="fs-2 text-center text-muted">
        To create a ticket, select a relevant topic 
        </h3>
        <div className='col-4 mt-5 mb-5 '>
            <h4 className='mt-3 mb-3'><i class="fa fa-plus-square" aria-hidden="true"></i> Account Opening</h4>
           
            <a href=''style={{ textDecoration:"none",lineHeight:"2.5"}}>Non Resident Indian (NRI)</a>
            <br/>
            <a href=''style={{ textDecoration:"none",lineHeight:"2.5"}}>Minor</a>
            <br/>
            <a href=''style={{ textDecoration:"none",lineHeight:"2.5"}}>Company, Partnership, HUF and LLP</a>
            <br/>
            <a href=''style={{ textDecoration:"none",lineHeight:"2.5"}}>Resident individual</a>
            <br/>
            <a href=''style={{ textDecoration:"none",lineHeight:"2.5"}}>Glossary</a>
        </div>
        <div className='col-4 mt-5 mb-5'>
          <h4 className='mt-3 mb-3'><i class="fa fa-user-o" aria-hidden="true"></i> Your Stock Pulse</h4>
            <a href=''style={{ textDecoration:"none",lineHeight:"2.5"}}>Your Profile</a>
          <br/>
            <a href=''style={{ textDecoration:"none",lineHeight:"2.5"}}>Account modification</a>
            <br/>
            <a href=''style={{ textDecoration:"none",lineHeight:"2.5"}}>Client Master Report (CMR) and Depository Participant (DP)</a>
            <br/>
            <a href=''style={{ textDecoration:"none",lineHeight:"2.5"}}>Nomination</a>
            <br/>
            <a href=''style={{ textDecoration:"none",lineHeight:"2.5"}}>Transfer and conversion of securities</a>
            <br/>
        </div>
        <div className='col-4 mt-5 mb-5'>
        <h4 className='mt-3 mb-3'><i class="fa fa-bar-chart" aria-hidden="true"></i>  Kite</h4>
          <a href=''style={{ textDecoration:"none",lineHeight:"2.5"}}> IPO</a>
            <br/>
            <a href=''style={{ textDecoration:"none",lineHeight:"2.5"}}>Trading FAQs</a>
            <br/>
            <a href=''style={{ textDecoration:"none",lineHeight:"2.5"}}>Margin Trading Facility (MTF) and Margins</a>
            <br/>
            <a href=''style={{ textDecoration:"none",lineHeight:"2.5"}}>Charts and orders</a>
            <br/>
            <a href=''style={{ textDecoration:"none",lineHeight:"2.5"}}>Alerts and Nudges</a>
            <br/>
            <a href=''style={{ textDecoration:"none",lineHeight:"2.5"}}>General</a>
        </div>
      </div>
      </div>
    );
}

export default CreateTicket ;