use anchor_lang::prelude::*;

pub mod constants;
pub mod errors;
pub mod instructions;
pub mod state;

use instructions::*;

declare_id!("H6qBMcWs42iZu99FPT2vwhKu1AsdRQzL5JwUs3QvQhGy");

#[program]
pub mod presale {
    use super::*;

    pub fn create_and_start_presale(
        ctx: Context<CreateAndStartPresale>,
        token_mint_address: Pubkey,
        softcap_amount: u64,
        hardcap_amount: u64,
        max_token_amount_per_address: u64,
        price_per_token: u64,
        end_time: u64,
    ) -> Result<()> {
        return create_and_start_presale::create_and_start_presale(
            ctx,
            token_mint_address,
            softcap_amount,
            hardcap_amount,
            max_token_amount_per_address,
            price_per_token,
            end_time,
        );
    }

    pub fn deposit_token(
        ctx: Context<DepositToken>,
        amount: u64,
    ) -> Result<()> {
        return deposit_token::deposit_token (
            ctx,
            amount,
        );
    }
    

    pub fn buy_and_claim_token(
        ctx: Context<BuyAndClaimToken>,
        quote_amount: u64,
        token_amount: u64,
        bump: u8
    ) -> Result<()> {
        return buy_and_claim_token::buy_and_claim_token (
            ctx,
            quote_amount,
            token_amount,
             bump
        );
    }

    pub fn withdraw(
        ctx: Context<Withdraw>,
        amount: u64,
        withdraw_type: WithdrawType,
        bump: u8
    ) -> Result<()> {
        return withdraw::withdraw(ctx, amount, withdraw_type, bump);

    }
}

#[derive(Accounts)]
pub struct Initialize {}
