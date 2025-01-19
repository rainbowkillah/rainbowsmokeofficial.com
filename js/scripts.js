function verifyAge() { 
    const age = document.getElementById('age').value; 
    if (age >= 18)
        { document.getElementById('ageVerification').style.display = 'none';
        document.getElementById('protectedContent').style.display = 'block';
    } else { alert('You must be at least 18 years old to view this content.'); }
}