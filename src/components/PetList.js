import React, { useEffect, useState } from "react";

import PetCard from "./PetCard";

const PetList = ({ pets, loading, error, sortedPetList }) => {
  return (
    <div style={{marginBottom:"100px"}}>
      <div style={{ margin: "20px 0" }}>
        <span style={{fontSize:"2.50rem",fontWeight:"bold"}}>Pets List</span>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "23px",
          }}
        >
          {pets.length === 0 ? (
            <p>No pets available.</p>
          ) : sortedPetList.length > 0 ? (
            sortedPetList.map((pet, index) => <PetCard key={index} {...pet} />)
          ) : (
            pets.map((pet, index) => <PetCard key={index} {...pet} />)
          )}
        </div>
      )}
    </div>
  );
};

export default PetList;
