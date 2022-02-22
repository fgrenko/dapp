package dapp_test

import (
	"testing"

	keepertest "github.com/fgrenko/dapp/testutil/keeper"
	"github.com/fgrenko/dapp/testutil/nullify"
	"github.com/fgrenko/dapp/x/dapp"
	"github.com/fgrenko/dapp/x/dapp/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.DappKeeper(t)
	dapp.InitGenesis(ctx, *k, genesisState)
	got := dapp.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
