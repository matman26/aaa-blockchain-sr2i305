#include <eosio/eosio.hpp>

using namespace std;
using namespace eosio;


CONTRACT aaa : public contract {
  public:
    using contract::contract;
    aaa(name receiver,
        name code,
        datastream <const char*> ds):
        contract(receiver,code,ds),
        _users(receiver,receiver.value) {}

    ACTION login(name user);
    ACTION adduser(name user);
    ACTION rmuser(name user);
    ACTION setrole(name user, bool role);

  private:

    TABLE users {
      name username;
      bool role = 0;
      auto primary_key() const { return username.value; }
    };

    //typedef multi_index<name("logs"), logs> logs_table;
    typedef multi_index<name("users"), users> users_table;
    
    //logs_table _logs;
    users_table _users;
};
