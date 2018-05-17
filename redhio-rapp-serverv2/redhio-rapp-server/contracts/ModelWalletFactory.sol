pragma solidity ^0.4.15;

import "./Factory.sol";
import "./ModelWallet.sol";


/// @title Multisignature wallet factory - Allows creation of multisig wallet.
/// @author Stefan George - <stefan.george@consensys.net>
contract ModelWalletFactory is Factory {

    /*
     * Public functions
     */
    /// @dev Allows verified creation of multisignature wallet.
    /// @param _owners List of initial owners.
    /// @param _required Number of required confirmations.
    /// @return Returns wallet address.
    function create(address[] _owners, uint _required)
        public
        returns (address wallet)
    {
        wallet = new ModelWallet(_owners, _required);
        register(wallet);
    }
}
