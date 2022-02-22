package keeper_test

import (
	"testing"

	testkeeper "github.com/fgrenko/dapp/testutil/keeper"
	"github.com/fgrenko/dapp/x/dapp/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.DappKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
