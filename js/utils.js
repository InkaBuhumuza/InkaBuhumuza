// Utility functions
function calculateAge(dob) {
  if (dob === "-" || !dob) return "-";
  const birthDate = new Date(dob);
  const today = new Date();
  
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  
  // Adjust if birthday hasn't occurred this year yet
  if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
    years--;
    months += 12;
  }
  
  // Adjust months if day of month hasn't passed
  if (today.getDate() < birthDate.getDate()) {
    months--;
  }
  
  // Return formatted string
  if (years === 0) {
    return `${months} mois`;
  } else if (months === 0) {
    return `${years} ans`;
   }//else {
  //   return `${years} ans ${months} mois`;
  // }
}

function formatDate(dateString) {
  if (dateString === "-" || !dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Get URL parameters
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Find cow by ID
function getCowById(id) {
  return cows.find(cow => cow.id === parseInt(id));
}