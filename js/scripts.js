function verifyAge(isOfAge) {
      if (isOfAge) {
        document.getElementById('ageGate').style.display = 'none';
        document.getElementById('ageVerifiedContent').style.display = 'block';
      } else {
        alert('Sorry, you must be 18 or older to access this content.');
      }
}
