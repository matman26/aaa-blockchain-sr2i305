#include <aaa.hpp>

ACTION aaa::login(name user) {
  // authenticate the blockchain user
  require_auth(user);

  // login the user
  print("Login succesful from user: ", name{user});
}

ACTION aaa::adduser(name user) {
  // authenticate the blockchain user
  require_auth(user);

  // Find the record from _users table
  auto user_itr = _users.find(user.value);
  if (user_itr == _users.end()) {
    // Create a user record if it does not exist
    _users.emplace(get_self(), [&](auto& user_data) {
      user_data.username = user;
    });

  } else {
    // Do nothing if user exists
    print("Username ",name{user}, " already exists");
  }
}

ACTION aaa::rmuser(name user) {
  // authenticate the blockchain user
  require_auth(user);

  // Find the record from _users table
  auto user_itr = _users.find(user.value);
  if (user_itr == _users.end()) {
    // Do nothing if user does not exist
    print("Username ",name{user}, " does not exist.");

  } else {
    // Remove entry if user exists
    _users.erase(user_itr);
  }
}

ACTION aaa::setrole(name user, bool role) {
  require_auth(get_self());
  auto user_itr = _users.find(user.value);
  if (user_itr == _users.end()) {
    // Do nothing if user does not exist
    print("Username ",name{user}, " does not exist.");

  } else {
    // Set role for user if it exists
    _users.modify(user_itr,get_self(),[&](auto& user_entry){
        user_entry.role=role;
    });
  }

}

EOSIO_DISPATCH(aaa,(login)(adduser)(rmuser)(setrole))
