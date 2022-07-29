import React from "react";

const OtherInfo = ({ formData, setFormData }) => {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nationality.."
        value={formData.nationalty}
        onChange={(e) => setFormData({ ...formData, nationalty: e.target.value })}
      />
      <input
        type="text"
        placeholder="Place of Birth..."
        value={formData.pob}
        onChange={(e) => setFormData({ ...formData, pob: e.target.value })}
      />
      <input
        type="text"
        placeholder="Residency..."
        value={formData.residency}
        onChange={(e) => setFormData({ ...formData, residency: e.target.value })}
      />
    </div>
  );
};

export default OtherInfo;
