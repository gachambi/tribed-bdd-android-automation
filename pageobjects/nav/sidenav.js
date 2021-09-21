class Sidenav {
  get createProfileBTN() {
    return $('//android.widget.TextView[@text="Create profile"]');
  }
  get companiesIFollowBTN() {
    return $('//android.widget.TextView[@text="Companies I Follow"]');
  }
  get companyRevealsBTN() {
    return $('//android.widget.TextView[@text="Company reveals"]');
  }
  get termsAndConditions() {
    return $('//android.widget.TextView[@text="Terms and Conditions"]');
  }
  get logoutBTN() {
    return $('//android.widget.TextView[@text="Log out"]');
  }
}

module.exports = new Sidenav();
