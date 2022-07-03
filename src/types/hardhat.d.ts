/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import * as Contracts from ".";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";
import { ethers } from "ethers";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "AllowanceCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AllowanceCrowdsale__factory>;
    getContractFactory(
      name: "Box",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Box__factory>;
    getContractFactory(
      name: "BoxV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BoxV2__factory>;
    getContractFactory(
      name: "Crowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Crowdsale__factory>;
    getContractFactory(
      name: "Greeter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Greeter__factory>;
    getContractFactory(
      name: "ITManToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITManToken__factory>;
    getContractFactory(
      name: "ITManTokenCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITManTokenCrowdsale__factory>;
    getContractFactory(
      name: "TimedCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimedCrowdsale__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "AllowanceCrowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AllowanceCrowdsale>;
    getContractAt(
      name: "Box",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Box>;
    getContractAt(
      name: "BoxV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BoxV2>;
    getContractAt(
      name: "Crowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Crowdsale>;
    getContractAt(
      name: "Greeter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Greeter>;
    getContractAt(
      name: "ITManToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITManToken>;
    getContractAt(
      name: "ITManTokenCrowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITManTokenCrowdsale>;
    getContractAt(
      name: "TimedCrowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimedCrowdsale>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
